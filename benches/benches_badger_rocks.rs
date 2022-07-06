#![cfg(feature = "enable-rocksdb")]
mod common;

use agatedb::Agate;
use agatedb::AgateOptions;
use agatedb::IteratorOptions;
use common::{gen_kv_pair, remove_files, unix_time};
use criterion::{criterion_group, criterion_main, Criterion};
use rand::prelude::ThreadRng;
use rand::Rng;
use rocksdb::DB;
use std::sync::Arc;
use tempdir::TempDir;

const BATCH_SIZE: u64 = 1000;
const SMALL_VALUE_SIZE: usize = 32;
const LARGE_VALUE_SIZE: usize = 102400;

fn badger_populate(agate: Arc<Agate>, value_size: usize) {
    let mut txn = agate.new_transaction_at(unix_time(), true);

    for i in 0..BATCH_SIZE {
        let (key, value) = gen_kv_pair(i, value_size);
        txn.set(key, value).unwrap();
    }

    txn.commit_at(unix_time()).unwrap();
}

fn badger_randread(agate: Arc<Agate>, value_size: usize, rng: &mut ThreadRng) {
    let txn = agate.new_transaction_at(unix_time(), false);

    for _ in 0..BATCH_SIZE {
        let (key, value) = gen_kv_pair(rng.gen_range(0, BATCH_SIZE), value_size);

        let item = txn.get(&key).unwrap();
        assert_eq!(item.value(), value);
    }
}

fn badger_iterate(agate: Arc<Agate>, value_size: usize) {
    let txn = agate.new_transaction_at(unix_time(), false);
    let opts = IteratorOptions::default();
    let mut iter = txn.new_iterator(&opts);
    iter.rewind();

    while iter.valid() {
        let item = iter.item();
        assert_eq!(item.value().len(), value_size);

        iter.next();
    }
}

fn rocks_populate(db: Arc<DB>, value_size: usize) {
    let mut write_options = rocksdb::WriteOptions::default();
    write_options.set_sync(true);
    write_options.disable_wal(false);

    let mut batch = rocksdb::WriteBatch::default();

    for i in 0..BATCH_SIZE {
        let (key, value) = gen_kv_pair(i, value_size);
        batch.put(key, value);
    }

    db.write_opt(batch, &write_options).unwrap();
}

fn rocks_randread(db: Arc<DB>, value_size: usize, rng: &mut ThreadRng) {
    for _ in 0..BATCH_SIZE {
        let (key, value) = gen_kv_pair(rng.gen_range(0, BATCH_SIZE), value_size);

        let find = db.get(key).unwrap();
        assert_eq!(find.unwrap(), value)
    }
}

fn rocks_iterate(db: Arc<DB>, value_size: usize) {
    let iter = db.iterator(rocksdb::IteratorMode::Start);

    for (_, value) in iter {
        assert_eq!(value.len(), value_size);
    }
}

fn bench_badger(c: &mut Criterion) {
    let mut rng = rand::thread_rng();

    let dir = TempDir::new("agatedb-bench-small-value").unwrap();
    let dir_path = dir.path();
    let mut opts = AgateOptions {
        create_if_not_exists: true,
        sync_writes: true,
        managed_txns: true,
        ..Default::default()
    };

    c.bench_function("badger populate small value", |b| {
        b.iter_batched(
            || {
                remove_files(dir_path);
                opts.dir = dir_path.to_path_buf();
                opts.value_dir = dir_path.to_path_buf();
                Arc::new(opts.open().unwrap())
            },
            |agate| {
                badger_populate(agate, SMALL_VALUE_SIZE);
            },
            criterion::BatchSize::SmallInput,
        );
    });

    let agate = Arc::new(opts.open().unwrap());

    c.bench_function("badger randread small value", |b| {
        b.iter(|| {
            badger_randread(agate.clone(), SMALL_VALUE_SIZE, &mut rng);
        });
    });

    c.bench_function("badger iterate small value", |b| {
        b.iter(|| {
            badger_iterate(agate.clone(), SMALL_VALUE_SIZE);
        });
    });

    dir.close().unwrap();
    let dir = TempDir::new("agatedb-bench-large-value").unwrap();
    let dir_path = dir.path();

    c.bench_function("badger populate large value", |b| {
        b.iter_batched(
            || {
                remove_files(dir_path);
                opts.dir = dir_path.to_path_buf();
                opts.value_dir = dir_path.to_path_buf();
                Arc::new(opts.open().unwrap())
            },
            |agate| {
                badger_populate(agate, LARGE_VALUE_SIZE);
            },
            criterion::BatchSize::SmallInput,
        );
    });

    let agate = Arc::new(opts.open().unwrap());

    c.bench_function("badger randread large value", |b| {
        b.iter(|| {
            badger_randread(agate.clone(), LARGE_VALUE_SIZE, &mut rng);
        });
    });

    c.bench_function("badger iterate large value", |b| {
        b.iter(|| {
            badger_iterate(agate.clone(), LARGE_VALUE_SIZE);
        });
    });

    dir.close().unwrap();
}

fn bench_rocks(c: &mut Criterion) {
    let mut rng = rand::thread_rng();

    let dir = TempDir::new("rocks-bench-small-value").unwrap();
    let dir_path = dir.path();
    let mut opts = rocksdb::Options::default();
    opts.create_if_missing(true);
    opts.set_compression_type(rocksdb::DBCompressionType::None);

    c.bench_function("rocks populate small value", |b| {
        b.iter_batched(
            || {
                remove_files(dir_path);
                Arc::new(rocksdb::DB::open(&opts, &dir).unwrap())
            },
            |db| {
                rocks_populate(db, SMALL_VALUE_SIZE);
            },
            criterion::BatchSize::SmallInput,
        );
    });

    let db = Arc::new(rocksdb::DB::open(&opts, &dir).unwrap());

    c.bench_function("rocks randread small value", |b| {
        b.iter(|| {
            rocks_randread(db.clone(), SMALL_VALUE_SIZE, &mut rng);
        });
    });

    c.bench_function("rocks iterate small value", |b| {
        b.iter(|| rocks_iterate(db.clone(), SMALL_VALUE_SIZE));
    });

    dir.close().unwrap();
    let dir = TempDir::new("rocks-bench-large-value").unwrap();
    let dir_path = dir.path();

    c.bench_function("rocks populate large value", |b| {
        b.iter_batched(
            || {
                remove_files(dir_path);
                Arc::new(rocksdb::DB::open(&opts, &dir).unwrap())
            },
            |db| {
                rocks_populate(db, LARGE_VALUE_SIZE);
            },
            criterion::BatchSize::SmallInput,
        );
    });

    let db = Arc::new(rocksdb::DB::open(&opts, &dir).unwrap());

    c.bench_function("rocks randread large value", |b| {
        b.iter(|| {
            rocks_randread(db.clone(), LARGE_VALUE_SIZE, &mut rng);
        });
    });

    c.bench_function("rocks iterate large value", |b| {
        b.iter(|| rocks_iterate(db.clone(), LARGE_VALUE_SIZE));
    });

    dir.close().unwrap();
}

criterion_group! {
  name = benches_badger_rocks;
  config = Criterion::default();
  targets = bench_badger, bench_rocks
}

criterion_main!(benches_badger_rocks);
