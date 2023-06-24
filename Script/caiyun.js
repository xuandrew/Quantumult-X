var obj = JSON.parse($response.body);

obj.result.device_id = "78B61F3B-706F-44E8-9E4D-F68BDA1BA896";
obj.result._id = "6358cb93e7a295001482d9aa";
obj.result.svip_given = 365;
obj.result.ranking_above = 91;
obj.result.is_visitor = false;
obj.result.is_phone_verified = true;
obj.result.hasBeenInvited = true;
obj.result.is_xy_vip = true;
obj.result.vip_expired_at = 4092599349;
obj.result.is_vip = true;
obj.result.xy_svip_expire = 4092599349;
obj.result.third_party_ids = [
     "63592fa7e7a295001888256b",
      "639ac02db1839300133031c0"
    ];
obj.result.wt.vip = {
        "is_auto_renewal" : false,
        "enabled" : true,
        "svip_auto_renewal_type" : "",
        "expired_at" : 4092599349,
        "auto_renewal_type" : "",
        "svip_expired_at" : 4092599349
      };
obj.result.wt.svip_given = 365;
obj.result.wt.ranking_above = 91;
obj.result.name = "chxm1023";
obj.result.avatar = "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLia6zPUuGQKVOJk2gnjpjHxSIuH7XaOJF2gEk9ic35ibib4QzUcbvNu6EpdHDc1Vciat1xg63ibK6EptWw/132";
obj.result.phone_num = "13145200000";
obj.result.vip_take_effect = 1;
obj.result.is_auto_renewal = false;
obj.result.is_primary = true;
obj.result.xy_vip_expire = 0;
obj.result.platform_id = "o3rJ_t00r0mxqS6GCVWMaVtEFLUk";
obj.result.svip_expired_at = 4092599349;
obj.result.svip_take_effect = 1;
obj.result.vip_type = "s";
obj.result.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps";
obj.result.bound_status.qq = {
        "id" : "63592fa7e7a295001888256b",
        "username" : "chxm1023",
        "is_bound" : true
      };
obj.result.bound_status.weixin = {
        "id" : "639ac02db1839300133031c0",
        "username" : "chxm1023",
        "is_bound" : true
      };
obj.result.bound_statuscaiyun = {
        "id" : "6358cb93e7a295001482d9aa",
        "username" : "",
        "is_bound" : true
      };

$done({body : JSON.stringify(obj)});

/*
let obj=JSON.parse($response.body)
obj.result["xy_svip_expire"]=4096483190
obj.result["svip_expired_at"]=4096483190
obj.result["is_xy_vip"]=true
obj.result["is_vip"]=true
obj.result["vip_type"]="s"
$done({body:JSON.stringify(obj)})
*/