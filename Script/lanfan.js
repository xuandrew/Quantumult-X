var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = 'prime.json';
const home = 'page_detail.json';

if (url.indexOf(vip) != -1) {

obj.content.user.prime.is_prime = true;
obj.content.user.prime.expires_time = "2024-01-01 00:00:00";
obj.content.user.prime_contract = "automatic_renewal";
obj.content.user.is_prime = true;
body = JSON.stringify(obj);
}

else if (url.indexOf(home) != -1) {
	obj.content.user.prime.is_prime = true;
	obj.content.user.is_prime = true;
	body = JSON.stringify(obj);
}
//obj.data.vip_item.type = 1 ,
//obj.data.vip_item.end_date = 2533268164
//obj.data.vip_item.expireTime: "3070928235000",

$done({body});
