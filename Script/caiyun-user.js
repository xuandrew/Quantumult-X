/**********************************************
脚本功能：彩云天气 用户信息
使用声明：⚠️仅供学习交流，🈲️商业用途


[rewrite_local]
^https:\/\/biz\.cyapi\.cn\/p\/v1\/user_info url script-response-body https://raw.githubusercontent.com/jizhi0520/QX/main/caiyun-user.js


[MITM]
hostname = biz.cyapi.cn
**********************************************/


let obj = JSON.parse($response.body);
   
    obj = {
      "show_completed_award" : false,
      "avatar_status" : 0,
      "industry" : " ",
      "reg_time" : "1599863895",
      "name_status" : 0,
      "completed_percent" : 100,
      "avatar" : "https://tvax4.sinaimg.cn/crop.0.0.512.512.180/5b346ee9ly8h2rbudgjzvj20e80e8wet.jpg?KID=imgbed,tva&Expires=1687458878&ssig=8y8aNZ7Vzz",
      "reg_days" : 0,
      "birthday" : " ",
      "city" : " ",
      "interests" : [
        " "
      ],
      "name" : "xuandrew",
      "gender" : 0
}
$done({body : JSON.stringify(obj)});
