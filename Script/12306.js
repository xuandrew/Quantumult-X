//let $=function(){const e="undefined"!=typeof $task,t="undefined"!=typeof $httpClient;return{isQuanX:e,isSurge:t,notify:(i,n,s)=>{e&&$notify(i,n,s),t&&$notification.post(i,n,s)},getValue:i=>e?$prefs.valueForKey(i):t?$persistentStore.read(i):void 0,setValue:(i,n)=>e?$prefs.setValueForKey(i,n):t?$persistentStore.write(i,n):void 0}}();"undefined"!=typeof $response?function(){let e=JSON.parse($response.body);e.materialsList&&(1===e.materialsList.length?function(e){e.materialsList[0].filePath="h",e.advertParam.skipTime=0}(e):e.materialsList.length>1&&(e.materialsList=[{}]));$done({body:JSON.stringify(e)})}():function(){$.setValue("","train_12306")&&console.log("12306去广告 - 脚本已更新，无需手动运行");$done()}();

//function removeAds(){var e=JSON.parse($response.body);if(e.materialsList)if(1===e.materialsList.length){if($prefs.valueForKey("train_12306"))e.materialsList[0].filePath=void 0,setData(e);else{setData(e),$prefs.setValueForKey("1","train_12306")&&$notify("12306去广告","","修改参数成功，退后台重进即可干掉开屏广告")}}else e.materialsList.length>1&&(e.materialsList=[{}]);$done({body:JSON.stringify(e)})}function setData(e){e.materialsList[0].billId="1000000",e.materialsList[0].billMaterialsId="2000000",e.advertParam.skipTime=1,e.advertParam.chacheTime=31536e4}function removeValue(){$prefs.removeValueForKey("train_12306")&&$notify("12306去广告","","广告参数已清空，可重新获取参数"),$done()}"undefined"!=typeof $response?removeAds():removeValue();


// 2023-02-11 22:30

/*
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (obj.materialsList) {
  if (obj.advertParam && obj.materialsList.length === 1) {
    obj.materialsList[0].filePath = "h";
    obj.advertParam.skipTime = 0;
  } else if (obj.materialsList.length > 1) {
    obj.materialsList = [];
  }
}

$done({ body: JSON.stringify(obj) });
*/

var ojbk = JSON.parse($response.body);
   
    ojbk = {
  "code": "00",
  "materialsList": [{
    "billId": "3427",
    "billMaterialsId": "6052",
    "filePath": "null",
    "title": "郎溪县文化和旅游局",
    "linkUri": "https://mp.weixin.qq.com/s/jLuZkL1MExVz-JHOHPgwSw",
    "linkType": 2,
    "viewUrlList": ["https://ad.12306.cn/ad/mon/mzc?bid=3427&appId=2&mid=6052&pn=0060&n=1&ct=0&cn=CH&reqDate=1670762668338&rid=e2f930654b784e9dad0b804692a2d222&did=E5D2D21C-AEB7-4402-A9D4-391A8FE0C07F&t=1"],
    "clickUrlList": ["https://ad.12306.cn/ad/mon/mzc?bid=3427&appId=2&mid=6052&pn=0060&n=1&ct=0&cn=CH&reqDate=1670762668338&rid=e2f930654b784e9dad0b804692a2d222&did=E5D2D21C-AEB7-4402-A9D4-391A8FE0C07F&t=2"],
    "textDesc": "",
    "dplUrl": "",
    "advNature": 1,
    "pn": "0060",
    "creativeType": 1,
    "areaCode": "LXU"
  }, {
    "billId": "4611",
    "billMaterialsId": "6304",
    "filePath": "null",
    "title": "铁路e卡通",
    "linkUri": "https://mp.weixin.qq.com/s/GuIM1ix0lw_3stdZg0S0bg",
    "linkType": 2,
    "viewUrlList": ["https://ad.12306.cn/ad/mon/mzc?bid=4611&appId=2&mid=6304&pn=0061&n=1&ct=0&cn=CH&reqDate=1670762668338&rid=e2f930654b784e9dad0b804692a2d222&did=E5D2D21C-AEB7-4402-A9D4-391A8FE0C07F&t=1"],
    "clickUrlList": ["https://ad.12306.cn/ad/mon/mzc?bid=4611&appId=2&mid=6304&pn=0061&n=1&ct=0&cn=CH&reqDate=1670762668338&rid=e2f930654b784e9dad0b804692a2d222&did=E5D2D21C-AEB7-4402-A9D4-391A8FE0C07F&t=2"],
    "textDesc": "",
    "dplUrl": "",
    "advNature": 1,
    "pn": "0061",
    "creativeType": 1
  }, {
    "billId": "4705",
    "billMaterialsId": "6317",
    "filePath": "null",
    "title": "12306酒店",
    "linkUri": "app#60000014#/www/hotel-activity.html?showTitleBar=false&hotelFromPage=12306_sy_ggw&activityId=100043",
    "linkType": 3,
    "viewUrlList": ["https://ad.12306.cn/ad/mon/mzc?bid=4705&appId=2&mid=6317&pn=0063&n=1&ct=0&cn=CH&reqDate=1670762668338&rid=e2f930654b784e9dad0b804692a2d222&did=E5D2D21C-AEB7-4402-A9D4-391A8FE0C07F&t=1"],
    "clickUrlList": ["https://ad.12306.cn/ad/mon/mzc?bid=4705&appId=2&mid=6317&pn=0063&n=1&ct=0&cn=CH&reqDate=1670762668338&rid=e2f930654b784e9dad0b804692a2d222&did=E5D2D21C-AEB7-4402-A9D4-391A8FE0C07F&t=2"],
    "textDesc": "",
    "dplUrl": "",
    "advNature": 4,
    "pn": "0063",
    "creativeType": 1
  }],
  "rid": "e2f930654b784e9dad0b804692a2d222",
  "advertParam": {
    "skipTime": 1,
    "showSkipBtn": -1,
    "skipTimeAgain": 1,
    "chacheTime": 600000,
    "fixedscreen": 3,
    "isDefault": 0,
    "displayNumDi": 1,
    "index": 2
  }
}

$done({body : JSON.stringify(ojbk)});