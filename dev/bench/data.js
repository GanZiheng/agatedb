window.BENCHMARK_DATA = {
  "lastUpdate": 1657771717408,
  "repoUrl": "https://github.com/GanZiheng/agatedb",
  "entries": {
    "Benchmark with RocksDB": [
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
          "id": "7fd71d3fe5088098a3f20254bf80a40cbe079d12",
          "message": "reduce sample size\n\nSigned-off-by: GanZiheng <ganziheng98@gmail.com>",
          "timestamp": "2022-07-12T20:22:35+08:00",
          "tree_id": "3e69d2e0c1380d82078376feaaf573cf86b73d2a",
          "url": "https://github.com/GanZiheng/agatedb/commit/7fd71d3fe5088098a3f20254bf80a40cbe079d12"
        },
        "date": 1657629591470,
        "tool": "cargo",
        "benches": [
          {
            "name": "agate sequentially populate small value",
            "value": 1180656225,
            "range": "± 123441952",
            "unit": "ns/iter"
          },
          {
            "name": "agate randomly populate small value",
            "value": 1126676551,
            "range": "± 158041322",
            "unit": "ns/iter"
          },
          {
            "name": "agate randread small value",
            "value": 177238684,
            "range": "± 1040000",
            "unit": "ns/iter"
          },
          {
            "name": "agate iterate small value",
            "value": 45540710,
            "range": "± 2043511",
            "unit": "ns/iter"
          },
          {
            "name": "agate sequentially populate large value",
            "value": 4163272768,
            "range": "± 51414477",
            "unit": "ns/iter"
          },
          {
            "name": "agate randomly populate large value",
            "value": 4215756142,
            "range": "± 43062345",
            "unit": "ns/iter"
          },
          {
            "name": "agate randread large value",
            "value": 261403248,
            "range": "± 2409866",
            "unit": "ns/iter"
          },
          {
            "name": "agate iterate large value",
            "value": 124764599,
            "range": "± 833330",
            "unit": "ns/iter"
          },
          {
            "name": "rocks sequentially populate small value",
            "value": 192399321,
            "range": "± 4880072",
            "unit": "ns/iter"
          },
          {
            "name": "rocks randomly populate small value",
            "value": 258587536,
            "range": "± 7063925",
            "unit": "ns/iter"
          },
          {
            "name": "rocks randread small value",
            "value": 168693268,
            "range": "± 801651",
            "unit": "ns/iter"
          },
          {
            "name": "rocks iterate small value",
            "value": 9194198,
            "range": "± 62290",
            "unit": "ns/iter"
          },
          {
            "name": "rocks sequentially populate large value",
            "value": 8151710028,
            "range": "± 168800058",
            "unit": "ns/iter"
          },
          {
            "name": "rocks randomly populate large value",
            "value": 7524884576,
            "range": "± 175102341",
            "unit": "ns/iter"
          },
          {
            "name": "rocks randread large value",
            "value": 948793787,
            "range": "± 1993762292",
            "unit": "ns/iter"
          },
          {
            "name": "rocks iterate large value",
            "value": 605379565,
            "range": "± 2002497",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zhangjinpeng@pingcap.com",
            "name": "zhangjinpeng1987",
            "username": "zhangjinpeng1987"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "475e17bce85cf5985161004c068616a594923365",
          "message": "Opt: has option switch key value separation off (#182)\n\n* opt: has option turn off key value separation\r\n\r\nSigned-off-by: zhangjinpeng1987 <zhangjinpeng@pingcap.com>",
          "timestamp": "2022-07-13T08:38:33+08:00",
          "tree_id": "54c17d923d862b5e09e544fee453e21ae6838b74",
          "url": "https://github.com/GanZiheng/agatedb/commit/475e17bce85cf5985161004c068616a594923365"
        },
        "date": 1657771716726,
        "tool": "cargo",
        "benches": [
          {
            "name": "agate sequentially populate small value",
            "value": 764489975,
            "range": "± 97241920",
            "unit": "ns/iter"
          },
          {
            "name": "agate randomly populate small value",
            "value": 990366597,
            "range": "± 24378649",
            "unit": "ns/iter"
          },
          {
            "name": "agate randread small value",
            "value": 204592191,
            "range": "± 3640566",
            "unit": "ns/iter"
          },
          {
            "name": "agate iterate small value",
            "value": 51156072,
            "range": "± 3404616",
            "unit": "ns/iter"
          },
          {
            "name": "agate sequentially populate large value",
            "value": 4159670440,
            "range": "± 88699663",
            "unit": "ns/iter"
          },
          {
            "name": "agate randomly populate large value",
            "value": 4464793176,
            "range": "± 97671720",
            "unit": "ns/iter"
          },
          {
            "name": "agate randread large value",
            "value": 294407644,
            "range": "± 5623012",
            "unit": "ns/iter"
          },
          {
            "name": "agate iterate large value",
            "value": 162023934,
            "range": "± 2200399",
            "unit": "ns/iter"
          },
          {
            "name": "rocks sequentially populate small value",
            "value": 188793948,
            "range": "± 3710354",
            "unit": "ns/iter"
          },
          {
            "name": "rocks randomly populate small value",
            "value": 236258003,
            "range": "± 8922274",
            "unit": "ns/iter"
          },
          {
            "name": "rocks randread small value",
            "value": 159964893,
            "range": "± 2348175",
            "unit": "ns/iter"
          },
          {
            "name": "rocks iterate small value",
            "value": 9304060,
            "range": "± 231580",
            "unit": "ns/iter"
          },
          {
            "name": "rocks sequentially populate large value",
            "value": 8166583534,
            "range": "± 176183664",
            "unit": "ns/iter"
          },
          {
            "name": "rocks randomly populate large value",
            "value": 8104337515,
            "range": "± 9070262474",
            "unit": "ns/iter"
          },
          {
            "name": "rocks randread large value",
            "value": 3351929863,
            "range": "± 43105372",
            "unit": "ns/iter"
          },
          {
            "name": "rocks iterate large value",
            "value": 754026353,
            "range": "± 5419809",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}