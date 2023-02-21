//let $=function(){const e="undefined"!=typeof $task,t="undefined"!=typeof $httpClient;return{isQuanX:e,isSurge:t,notify:(i,n,s)=>{e&&$notify(i,n,s),t&&$notification.post(i,n,s)},getValue:i=>e?$prefs.valueForKey(i):t?$persistentStore.read(i):void 0,setValue:(i,n)=>e?$prefs.setValueForKey(i,n):t?$persistentStore.write(i,n):void 0}}();"undefined"!=typeof $response?function(){let e=JSON.parse($response.body);e.materialsList&&(1===e.materialsList.length?function(e){e.materialsList[0].filePath="h",e.advertParam.skipTime=0}(e):e.materialsList.length>1&&(e.materialsList=[{}]));$done({body:JSON.stringify(e)})}():function(){$.setValue("","train_12306")&&console.log("12306去广告 - 脚本已更新，无需手动运行");$done()}();

function removeAds(){var e=JSON.parse($response.body);if(e.materialsList)if(1===e.materialsList.length){if($prefs.valueForKey("train_12306"))e.materialsList[0].filePath=void 0,setData(e);else{setData(e),$prefs.setValueForKey("1","train_12306")&&$notify("12306去广告","","修改参数成功，退后台重进即可干掉开屏广告")}}else e.materialsList.length>1&&(e.materialsList=[{}]);$done({body:JSON.stringify(e)})}function setData(e){e.materialsList[0].billId="1000000",e.materialsList[0].billMaterialsId="2000000",e.advertParam.skipTime=1,e.advertParam.chacheTime=31536e4}function removeValue(){$prefs.removeValueForKey("train_12306")&&$notify("12306去广告","","广告参数已清空，可重新获取参数"),$done()}"undefined"!=typeof $response?removeAds():removeValue();


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