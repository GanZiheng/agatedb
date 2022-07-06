window.BENCHMARK_DATA = {
  "lastUpdate": 1657095830693,
  "repoUrl": "https://github.com/GanZiheng/agatedb",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ganziheng98@gmail.com",
            "name": "GanZiheng",
            "username": "GanZiheng"
          },
          "committer": {
            "email": "ganziheng98@gmail.com",
            "name": "GanZiheng",
            "username": "GanZiheng"
          },
          "distinct": true,
          "id": "a6a9a5274ae4acfefea456948a72770742a6783d",
          "message": "update ci\n\nSigned-off-by: GanZiheng <ganziheng98@gmail.com>",
          "timestamp": "2022-07-01T16:35:56+08:00",
          "tree_id": "219f3525a1d779471898d62813c8cbd77d9a258c",
          "url": "https://github.com/GanZiheng/agatedb/commit/a6a9a5274ae4acfefea456948a72770742a6783d"
        },
        "date": 1656664937685,
        "tool": "cargo",
        "benches": [
          {
            "name": "format make key with ts",
            "value": 121,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "format get ts",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "table builder",
            "value": 87687300,
            "range": "± 865532",
            "unit": "ns/iter"
          },
          {
            "name": "table read",
            "value": 3042233,
            "range": "± 54966",
            "unit": "ns/iter"
          },
          {
            "name": "table read and build",
            "value": 7884952,
            "range": "± 40457",
            "unit": "ns/iter"
          },
          {
            "name": "table random read",
            "value": 1802,
            "range": "± 33",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ganziheng98@gmail.com",
            "name": "GanZiheng",
            "username": "GanZiheng"
          },
          "committer": {
            "email": "ganziheng98@gmail.com",
            "name": "GanZiheng",
            "username": "GanZiheng"
          },
          "distinct": true,
          "id": "5cac49a2976d5bab9c40fb647dc5239b46758e76",
          "message": "Revert \"test\"\n\nThis reverts commit 59163d1a0bc75cc9749561d37d7e801a15ed5133.",
          "timestamp": "2022-07-01T17:05:06+08:00",
          "tree_id": "219f3525a1d779471898d62813c8cbd77d9a258c",
          "url": "https://github.com/GanZiheng/agatedb/commit/5cac49a2976d5bab9c40fb647dc5239b46758e76"
        },
        "date": 1656666707624,
        "tool": "cargo",
        "benches": [
          {
            "name": "format make key with ts",
            "value": 116,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "format get ts",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "table builder",
            "value": 99341341,
            "range": "± 235292",
            "unit": "ns/iter"
          },
          {
            "name": "table read",
            "value": 2856956,
            "range": "± 40514",
            "unit": "ns/iter"
          },
          {
            "name": "table read and build",
            "value": 7964977,
            "range": "± 22940",
            "unit": "ns/iter"
          },
          {
            "name": "table random read",
            "value": 1594,
            "range": "± 19",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ganziheng98@gmail.com",
            "name": "GanZiheng",
            "username": "GanZiheng"
          },
          "committer": {
            "email": "ganziheng98@gmail.com",
            "name": "GanZiheng",
            "username": "GanZiheng"
          },
          "distinct": true,
          "id": "fd4c965dc06a2b3322040012418ba24f61c3f3d0",
          "message": "update ci\n\nSigned-off-by: GanZiheng <ganziheng98@gmail.com>",
          "timestamp": "2022-07-06T15:08:47+08:00",
          "tree_id": "0de1ad2278ca359c08f608e4f696d8173187bbe2",
          "url": "https://github.com/GanZiheng/agatedb/commit/fd4c965dc06a2b3322040012418ba24f61c3f3d0"
        },
        "date": 1657092146131,
        "tool": "cargo",
        "benches": [
          {
            "name": "badger populate small value",
            "value": 3473885,
            "range": "± 882984",
            "unit": "ns/iter"
          },
          {
            "name": "badger randread small value",
            "value": 1171336,
            "range": "± 91248",
            "unit": "ns/iter"
          },
          {
            "name": "badger iterate small value",
            "value": 246599,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "badger populate large value",
            "value": 486343716,
            "range": "± 20915415",
            "unit": "ns/iter"
          },
          {
            "name": "badger randread large value",
            "value": 16732553,
            "range": "± 227013",
            "unit": "ns/iter"
          },
          {
            "name": "badger iterate large value",
            "value": 10750206,
            "range": "± 195072",
            "unit": "ns/iter"
          },
          {
            "name": "rocks populate small value",
            "value": 1218480,
            "range": "± 80737",
            "unit": "ns/iter"
          },
          {
            "name": "rocks randread small value",
            "value": 1495663,
            "range": "± 10236",
            "unit": "ns/iter"
          },
          {
            "name": "rocks iterate small value",
            "value": 156495,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "rocks populate large value",
            "value": 485306433,
            "range": "± 10643786",
            "unit": "ns/iter"
          },
          {
            "name": "rocks randread large value",
            "value": 109787050,
            "range": "± 1061169",
            "unit": "ns/iter"
          },
          {
            "name": "rocks iterate large value",
            "value": 113668387,
            "range": "± 897889",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ganziheng98@gmail.com",
            "name": "GanZiheng",
            "username": "GanZiheng"
          },
          "committer": {
            "email": "ganziheng98@gmail.com",
            "name": "GanZiheng",
            "username": "GanZiheng"
          },
          "distinct": true,
          "id": "f85b72fb6ea12343595bba5458e227772da4916d",
          "message": "update ci\n\nSigned-off-by: GanZiheng <ganziheng98@gmail.com>",
          "timestamp": "2022-07-06T15:38:15+08:00",
          "tree_id": "8103632753a3dd6c8a20cd7225b40d80c9e9b940",
          "url": "https://github.com/GanZiheng/agatedb/commit/f85b72fb6ea12343595bba5458e227772da4916d"
        },
        "date": 1657094422026,
        "tool": "cargo",
        "benches": [
          {
            "name": "badger populate small value",
            "value": 15188534,
            "range": "± 5336337",
            "unit": "ns/iter"
          },
          {
            "name": "badger randread small value",
            "value": 1026842,
            "range": "± 94891",
            "unit": "ns/iter"
          },
          {
            "name": "badger iterate small value",
            "value": 219741,
            "range": "± 649",
            "unit": "ns/iter"
          },
          {
            "name": "badger populate large value",
            "value": 1501090873,
            "range": "± 14602672",
            "unit": "ns/iter"
          },
          {
            "name": "badger randread large value",
            "value": 17258092,
            "range": "± 165597",
            "unit": "ns/iter"
          },
          {
            "name": "badger iterate large value",
            "value": 11819078,
            "range": "± 284524",
            "unit": "ns/iter"
          },
          {
            "name": "rocks populate small value",
            "value": 7155739,
            "range": "± 5274776",
            "unit": "ns/iter"
          },
          {
            "name": "rocks randread small value",
            "value": 1340173,
            "range": "± 19447",
            "unit": "ns/iter"
          },
          {
            "name": "rocks iterate small value",
            "value": 132228,
            "range": "± 1148",
            "unit": "ns/iter"
          },
          {
            "name": "rocks populate large value",
            "value": 1580864984,
            "range": "± 19865946",
            "unit": "ns/iter"
          },
          {
            "name": "rocks randread large value",
            "value": 103124911,
            "range": "± 1250470",
            "unit": "ns/iter"
          },
          {
            "name": "rocks iterate large value",
            "value": 105789193,
            "range": "± 985960",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ganziheng98@gmail.com",
            "name": "GanZiheng",
            "username": "GanZiheng"
          },
          "committer": {
            "email": "ganziheng98@gmail.com",
            "name": "GanZiheng",
            "username": "GanZiheng"
          },
          "distinct": true,
          "id": "90e8fe481f8eb78d6808b1d8e8007e35f59a34db",
          "message": "Merge branch 'master' of https://github.com/tikv/agatedb into test-bench-action",
          "timestamp": "2022-07-06T16:10:03+08:00",
          "tree_id": "f7aff45aa5db60bf373687883c2013589accae36",
          "url": "https://github.com/GanZiheng/agatedb/commit/90e8fe481f8eb78d6808b1d8e8007e35f59a34db"
        },
        "date": 1657095830039,
        "tool": "cargo",
        "benches": [
          {
            "name": "badger populate small value",
            "value": 3134934,
            "range": "± 853478",
            "unit": "ns/iter"
          },
          {
            "name": "badger randread small value",
            "value": 1198613,
            "range": "± 904",
            "unit": "ns/iter"
          },
          {
            "name": "badger iterate small value",
            "value": 280308,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "badger populate large value",
            "value": 481317157,
            "range": "± 20884606",
            "unit": "ns/iter"
          },
          {
            "name": "badger randread large value",
            "value": 15145918,
            "range": "± 186045",
            "unit": "ns/iter"
          },
          {
            "name": "badger iterate large value",
            "value": 8334075,
            "range": "± 241405",
            "unit": "ns/iter"
          },
          {
            "name": "rocks populate small value",
            "value": 1066008,
            "range": "± 27049",
            "unit": "ns/iter"
          },
          {
            "name": "rocks randread small value",
            "value": 1654723,
            "range": "± 4866",
            "unit": "ns/iter"
          },
          {
            "name": "rocks iterate small value",
            "value": 147063,
            "range": "± 1378",
            "unit": "ns/iter"
          },
          {
            "name": "rocks populate large value",
            "value": 477502386,
            "range": "± 16066140",
            "unit": "ns/iter"
          },
          {
            "name": "rocks randread large value",
            "value": 128227247,
            "range": "± 1447417",
            "unit": "ns/iter"
          },
          {
            "name": "rocks iterate large value",
            "value": 134648526,
            "range": "± 1577045",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}