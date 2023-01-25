let body = $response.body
console.log(body)
try {
    let obj = JSON.parse(body)
    if (obj.code == 0 && obj.data) {
        obj.data.expert = true;
        obj.data.level = 1;
        obj.data.vipEndDate = "22220222"
        obj.data.name = "xuandrew"
        obj.data.wxName = "xuandrew"
        body = JSON.stringify(obj)
    }
} catch(e) {
    console.error(__name, 'error', e.message)
}
$done(body)
