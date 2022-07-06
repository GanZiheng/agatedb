window.BENCHMARK_DATA = {
  "lastUpdate": 1657109035145,
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
          "id": "161c314b116463cd2e2893f9e26189ed8ca7d3ef",
          "message": "update\n\nSigned-off-by: GanZiheng <ganziheng98@gmail.com>",
          "timestamp": "2022-07-06T19:47:48+08:00",
          "tree_id": "96ad3d90c28d57d2e6434e5079bbefc24a5172b4",
          "url": "https://github.com/GanZiheng/agatedb/commit/161c314b116463cd2e2893f9e26189ed8ca7d3ef"
        },
        "date": 1657109033772,
        "tool": "cargo",
        "benches": [
          {
            "name": "agate populate small value",
            "value": 3794247,
            "range": "± 202671",
            "unit": "ns/iter"
          },
          {
            "name": "agate randread small value",
            "value": 1173477,
            "range": "± 3467",
            "unit": "ns/iter"
          },
          {
            "name": "agate iterate small value",
            "value": 246035,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "agate populate large value",
            "value": 487880465,
            "range": "± 21240998",
            "unit": "ns/iter"
          },
          {
            "name": "agate randread large value",
            "value": 17169919,
            "range": "± 157816",
            "unit": "ns/iter"
          },
          {
            "name": "agate iterate large value",
            "value": 10997820,
            "range": "± 275716",
            "unit": "ns/iter"
          },
          {
            "name": "rocks populate small value",
            "value": 1394263,
            "range": "± 160091",
            "unit": "ns/iter"
          },
          {
            "name": "rocks randread small value",
            "value": 1535981,
            "range": "± 5484",
            "unit": "ns/iter"
          },
          {
            "name": "rocks iterate small value",
            "value": 152848,
            "range": "± 1156",
            "unit": "ns/iter"
          },
          {
            "name": "rocks populate large value",
            "value": 483342817,
            "range": "± 11543149",
            "unit": "ns/iter"
          },
          {
            "name": "rocks randread large value",
            "value": 111568829,
            "range": "± 1280466",
            "unit": "ns/iter"
          },
          {
            "name": "rocks iterate large value",
            "value": 115041543,
            "range": "± 705461",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}