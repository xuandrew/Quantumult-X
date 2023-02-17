let obj = JSON.parse($response.body);
obj.data = {
"vip": 1,
"consume": 150,
"time": "2099-12-31",
"signInStaus": 0
}
$done({body: JSON.stringify(obj)});
