window.BENCHMARK_DATA = {
  "lastUpdate": 1656664938093,
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
      }
    ]
  }
}