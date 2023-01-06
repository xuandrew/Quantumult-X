//let $=function(){const e="undefined"!=typeof $task,t="undefined"!=typeof $httpClient;return{isQuanX:e,isSurge:t,notify:(i,s,a)=>{e&&$notify(i,s,a),t&&$notification.post(i,s,a)},getValue:i=>e?$prefs.valueForKey(i):t?$persistentStore.read(i):void 0,setValue:(i,s)=>e?$prefs.setValueForKey(i,s):t?$persistentStore.write(i,s):void 0}}();function setValue(e){e.materialsList[0].billId="1000005",e.materialsList[0].billMaterialsId="2000005",e.advertParam.skipTime=1}"undefined"!=typeof $response?function(){let e=JSON.parse($response.body);e.materialsList&&(1===e.materialsList.length?function(e){$.getValue("train_12306")?(e.materialsList[0].filePath=void 0,setValue(e)):function(e){let t=(new Date).getTime();setValue(e);let i=t+","+e.materialsList[0].billId+","+e.materialsList[0].billMaterialsId,s=$.setValue(i,"train_12306");s&&$.notify("12306去广告","","参数修改成功，退后台重进即可告别开屏广告")}(e)}(e):e.materialsList.length>1&&(e.materialsList=[{}]));$done({body:JSON.stringify(e)})}():function(){$.setValue("","train_12306")&&console.log("12306去广告 - 参数已清空，可重新获取参数");$done()}();


let $ = kokoryh();

if (typeof $response !== 'undefined') {
    removeAds();
} else {
    removeValue();
}

function removeAds() {
    let obj = JSON.parse($response.body);
    if (obj.materialsList) {
        if (obj.materialsList.length === 1) {
            // console.log(obj.materialsList[0].title + ", billId: " + obj.materialsList[0].billId + ", billMaterialsId: " + obj.materialsList[0].billMaterialsId);
            handleSplash(obj);
        } else if (obj.materialsList.length > 1) {
            obj.materialsList = [{}];
        }
    }
    $done({body: JSON.stringify(obj)});
}

function handleSplash(obj) {
    let train_12306 = $.getValue("train_12306");
    if (train_12306) {
        obj.materialsList[0].filePath = undefined;
        setValue(obj);
    } else {
        handleNoTemp(obj);
    }
}

function handleNoTemp(obj) {
    let timestamp = new Date().getTime();
    setValue(obj);
    let train_12306 = timestamp + "," + obj.materialsList[0].billId + "," + obj.materialsList[0].billMaterialsId;
    let success = $.setValue(train_12306, "train_12306");
    if (success) {
        $.notify("12306去广告", "", "参数修改成功，退后台重进即可告别开屏广告");
        // console.log("12306去广告 - 参数修改成功，退后台重进即可告别开屏广告");
    }
}

function setValue(obj) {
    obj.materialsList[0].billId = "1000005";
    obj.materialsList[0].billMaterialsId = "2000005";
    // obj.advertParam.chacheTime = 86400 * 365 * 10;
    obj.advertParam.skipTime = 1;
}

function handleSplash2(obj) {
    let timestamp = new Date().getTime();
    let train_12306 = $.getValue("train_12306");
    if (train_12306) {
        let arr = train_12306.split(",");
        if (timestamp - arr[0] < 86400 * 1000 * 7) {  // 缓存有效期，暂时设置为7天，以实际为准
            obj.materialsList[0].filePath = undefined;
            obj.materialsList[0].billId = arr[1];
            obj.materialsList[0].billMaterialsId = arr[2];
            obj.advertParam.skipTime = 1;
        } else {
            handleNoTemp2(obj, timestamp);  // 重新进行缓存
        }
    } else {
        handleNoTemp2(obj, timestamp);
    }
}

function handleNoTemp2(obj, timestamp) {
    obj.advertParam.skipTime = 1;
    let train_12306 = timestamp + "," + obj.materialsList[0].billId + "," + obj.materialsList[0].billMaterialsId;
    let success = $.setValue(train_12306, "train_12306");
    if (success) {
        console.log("12306去广告 - 获取参数成功，在缓存有效期内你不会看到12306的开屏广告");
    }
}

function removeValue() {
    let success = $.setValue("", "train_12306");
    if (success) {
        console.log("12306去广告 - 参数已清空，可重新获取参数");
    }
    $done();
}

function kokoryh() {
    const isQuanX = 'undefined' !== typeof $task;
    const isSurge = 'undefined' !== typeof $httpClient;
    const notify = (title, subtitle, message) => {
        if (isQuanX) $notify(title, subtitle, message);
        if (isSurge) $notification.post(title, subtitle, message);
    }
    const getValue = (key) => {
        if (isQuanX) return $prefs.valueForKey(key);
        if (isSurge) return $persistentStore.read(key);
    }
    const setValue = (val, key) => {
        if (isQuanX) return $prefs.setValueForKey(val, key);
        if (isSurge) return $persistentStore.write(val, key);
    }
    return {
        isQuanX,
        isSurge,
        notify,
        getValue,
        setValue
    }
}