let obj = JSON.parse($response.body);
8
    obj.data = {
9
    "vip": 1,
10
    "consume": 150,
11
    "time": "2099-12-31",
12
    "signInStaus": 0
13
  }
14
$done({body: JSON.stringify(obj)});
