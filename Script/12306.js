//let $=function(){const e="undefined"!=typeof $task,t="undefined"!=typeof $httpClient;return{isQuanX:e,isSurge:t,notify:(i,s,a)=>{e&&$notify(i,s,a),t&&$notification.post(i,s,a)},getValue:i=>e?$prefs.valueForKey(i):t?$persistentStore.read(i):void 0,setValue:(i,s)=>e?$prefs.setValueForKey(i,s):t?$persistentStore.write(i,s):void 0}}();function setValue(e){e.materialsList[0].billId="1000005",e.materialsList[0].billMaterialsId="2000005",e.advertParam.skipTime=1}"undefined"!=typeof $response?function(){let e=JSON.parse($response.body);e.materialsList&&(1===e.materialsList.length?function(e){$.getValue("train_12306")?(e.materialsList[0].filePath=void 0,setValue(e)):function(e){let t=(new Date).getTime();setValue(e);let i=t+","+e.materialsList[0].billId+","+e.materialsList[0].billMaterialsId,s=$.setValue(i,"train_12306");s&&$.notify("12306去广告","","参数修改成功，退后台重进即可告别开屏广告")}(e)}(e):e.materialsList.length>1&&(e.materialsList=[{}]));$done({body:JSON.stringify(e)})}():function(){$.setValue("","train_12306")&&console.log("12306去广告 - 参数已清空，可重新获取参数");$done()}();

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