/*
 var body = $response.body;
 var url = $request.url;
 var obj = JSON.parse(body);

 const p1 = 'mobile-user/v2/homePage/';
 const p2 = 'business-vip-presale-core-web/product/info';
 const p3 = 'mobile-playpage/playpage/tabs';
 const p4 = 'mobile-album/album/page/ts';
 const p5 = 'vip/v1/recommand';
 const p6 = 'mobile/v1/album/track/ts'
 const p7 = 'business-vip-presale-mobile-web/page/ts';
 const p8 = '/track/v3/baseInfo'
 //个人页面
 if (url.indexOf(p1) != -1) {
     obj.data.nickname = "为什么叫我写昵称";
     obj.data.isVip = true;
     obj.data.vipExpireTime = 32493834549000;
     obj.data.vipStatus = 2;
     obj.data.vipLevel = 5;
     obj.data.anchorVipInfo.isVip = true;
     obj.data.vipInfo.isVip = true;
     obj.data.vipInfo.level = 5;
     obj.data.mobileLargeLogo = "https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg";
     obj.data.mobileSmallLogo = "https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg";
     obj.data.mobileMiddleLogo = "https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg";

     body = JSON.stringify(obj);
 }


 //主页会员
 if (url.indexOf(p2) != -1) {
     obj.data.userInfo.userNickName = "为什么叫我写昵称";
     obj.data.userInfo.userLogoPic = "https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg";
     obj.data.userInfo.vipStatus = 2;
     obj.data.userInfo.expireDate = "2999-12-12";
     obj.data.userInfo.expireDays = 9999999;
     obj.data.userInfo.userLevel = 2;
     obj.data.userInfo.userLevelIcon = "http://imagev2.xmcdn.com/group87/M09/0A/4E/wKg5IV8Pwjmw5My3AAASYbQa39Y768.png";
     delete obj.data.recommendVipProduct;
     delete obj.data.moreVipChannels;
     delete obj.data.jointVipProducts;


     body = JSON.stringify(obj);
 }
 //播放页面剩余时间
// if (url.indexOf(p3) != -1) {

     //token有效状态下
//     body = body
// .replace(/buttonText":"[^"]+/g, 'buttonText":"添加作者TG频道>_')
// .replace(/buttonActionUrl":"[^"]+/g, 'buttonActionUrl":"https://t.me/WeiRenQAQ')
// .replace(/expireTime":\d+/g, 'expireTime":4092647110')
// .replace(/guidance":"[^"]+/g, 'guidance":"已解锁付费内容')
// .replace(/explainText":"[^"]+/g, 'explainText":"作者伟人!')
// .replace(/trackTipsText":"[^"]+/g, 'trackTipsText":"伟人♥️🤟♥️')
// .replace(/playFinishedVoiceUrl":"[^"]+/g, 'playFinishedVoiceUrl":"')
         //token失效状态下

//     .replace(/"text":"[^"]+/g, '"text":"脚本已失效添加TG频道反馈！')
//         .replace(/"url":"[^"]+/g, '"url":"https://t.me/WeiRenQAQ');
// }

 //播放列表改免费 
 if (url.indexOf(p4) != -1) {
     for (var i = 0; i < obj.data.tracks.list.length; i++) {
         obj.data.tracks.list[i].isFree = true;
         obj.data.tracks.list[i].isPaid = false;
     }
     //删除底部开会员框架
     delete obj.data.albumGuidVipResourceInfo;
     body = JSON.stringify(obj);
 }
 //主界面会员删除
 if (url.indexOf(p5) != -1) {

     delete obj.data.modules;
     obj.data.vipStatus = 2;
     obj.data.nickName = "为什么叫我写昵称";

     body = JSON.stringify(obj);
 }

 //播放列表改免费
 if (url.indexOf(p6) != -1) {
     for (var i = 0; i < obj.data.list.length; i++) {
         obj.data.list[i].isFree = true;
         obj.data.list[i].isPaid = false;
     }

     body = JSON.stringify(obj);
 }
 //我的会员
 if (url.indexOf(p7) != -1) {
     body = body.replace(/nickName":"[^"]+/g, 'nickName":"为什么叫我写昵称').replace(/vipStatus":\d/g, 'vipStatus":2').replace(/subtitle":"[^"]+/g, 'subtitle":"2999-09-09会员到期').replace(/userLevelIcon":"[^"]+/g, 'userLevelIcon":"http://imagev2.xmcdn.com/group87/M09/0A/4E/wKg5IV8Pwjmw5My3AAASYbQa39Y768.png').replace(/userLogoPic":"[^"]+/g, 'userLogoPic":"https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg')

     ;
 }
 if (url.indexOf(p8) != -1) {


     obj.msg = "该JS一天运行次数过多。请隔一天再来";
     body = JSON.stringify(obj);
 }


 $done({
     body
 });
*/

/******************************

脚本功能：喜马拉雅+解锁VIP
软件版本：9.0.96
更新时间：2023-2-4
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/(mobile|mobilehera|mobwsa|pns)\.ximalaya\.com\/(mobile-playpage|mobile\/(quickplay|acceptapn)|comment-mobile/get|sound-guide-portal\/(sound\/guide|display)) url script-request-header https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/XMLY/xmly_crack.js

[mitm] 

hostname = *.ximalaya.com

*******************************/

/****
var version_='jsjiami.com.v7',_0x1fff=(function(){return[...[version_,'whAKjUMsDjTieYaJwmgOidp.uFcutogdm.vw7SXV==','WPtcKwtdKXziW7hcMM/dRMy','WOu7aCo9WRe','iu18hMv7W5G','yCkuiCkKgCkmWQ3dHMO5','jdFcT3/dHa','WPDSdNqsWQ90','qrOymb/dNfDBWQFcLq','w8kvwCotjW','W6pdL8kWW584','n8o9d39nWRlcPfy','ldXKW5ZcVMhcHCkmfCki','v1VdRahdHSo7jSoaWOuI'],...(function(){return[...['Emk4qG','ASkmctu/W4tcTCoqW5raWQy','lhHIWPNdNNZdU8kxqmkHsq','yJaVWPv2W7BcSG','BSkmW4VcSmkw','CSkRBd8nW6VdSWm9WOxdH8k7jmkG','pmofWQHXWQ8','oCoCWQhcL3PfW4NdQhddKCoinX8','sWJcMKVcGgCZWRFdPSklpNZdNa','WOjOWRtcKCkjWPhdULm','W4qrWQOKrgO7j8kPWQ8HW5GMWPddKCkZWRSyj3yKWOtdL8o2B2PxW7/dGq9AqJtcSHNdMSk4w8oRw3ZcMCo6W7xdVmoVW4fMdCo+kmk3WOufywjKWP3dNgOzW4/cUCkEWRP5cvJcRmozoCosl8oHW682FCoOWO8yx8kamwiYWPyzqCoHEKLGW4pdIGXIE3RcVmkYzLddNCoSW5NcGHxcS8kFW4TnW5SmwZeHW4bdW7yKAgWRWQrbb8ktWO7dHqFcLmoKtXddL8oYWQ8OnmoyW70fuCo3hMziW4tdK0pdPCoKk3u8W7yNWOL7WQ3dSwJcPWNcRCkKpG4WWOaYeLGEW4mEzmoGiCoKACkdW5zbW4NdSxpdVKD5W6ZdIaD+dSoRW6j9WRBdNX9QDv4kW69bBmo3FqLkW6RcVZXuWOdcMbJcSJvVymoBWQldKKldLCo+Amk1W5lcImovd0fjfIVdTsBcKXv9fmopCSohW7OoACkoW4NdL0ZdJ8oHrCoNW6rGwu9xWPNcNffbWRpdNGvSW67dMCoVW7RdLmoPWO9SlX/cQZxcRwBcRCo7F8oCWR4ooeNcH1bKm8oPW5X2i8kormkqmSkRWQldHCona8oIW7dcVCkrluJdK8klW5hdPuvEW7tdRqxdQSklqCoDW5qAW67cK0a8d1vOWOPlk8oSW4WSWRmIW75jWRpdUCoSW7/dQ1VdG2zXWOZdUsxcOZhcUSkaW5n/qmknm8oGhmo7oZZdRSoRW6yQW4PKW4BdGcBcONdcIWmgoCouW7amdmkbDrNdOGlcMatcNqhdISk+WQaFmsZcML8fdrtdPCkzb8kTkKL/yYq3xd3dOLJdTHG4W4LTm3H1f8omWPeMW6/dOMNdRmkEW6nhtmo8WRe0sGZcONuPW6eome4FvCoSWORdQaPYcZFcKSkjW5Lxe8ohWPJcSMWyba4','WOddPmoAbCkhW4lcGCogWQxdG8oXWRqJ','WQWohmoyWOm','W7VcMSkZW4b5'],...(function(){return['WQNdOmkLW4z9W5RdUbC','WRVdTrKMkWm9scZdN0DJmSk0jWBdPmk/WORdRmobCMFcKCkwudCVWPergSomW4OvW7LcemkhsdnXW6dcQmohB8k8q8kRpKOaW6CWneK6iGX5p8k5W4xdHexdJSkZW4RdNCoSDSkIW64oEmknFfWOW6rGDCk4ECohiCoqWRq/emkDBsTDaGvzWPlcMmk+W6CMWOlcHIpdNSoAW6dcJKztDYRcPfZcP8oIm0pdLhOgWQrzFwy6FxiSW7JdL8owcmoboJDTW5tdTw9yW6RcPmkh','vfqSW7NcUW','zKPbW5OJWQpdH8ogW4tcI8o4W53dUW','uCoUxIhdRxdcHW','W78gWReetW','f8k0WPJcNapdSGCKWOddUG','fCo2wwvdW6yxehZdOCo6W6RcGtW','C8odrb/dUG','jJieusCxWPZdVGysW4PyWPG','hmo4wgviW6qwue3dJmoRW6pcPG','qmk3lGKH'];}())];}())];}());var _0x1a7f16=_0x5243;function _0x5243(_0x328860,_0x24aae1){var _0x1fffb4=_0x1fff;return _0x5243=function(_0x52439d,_0x132d92){_0x52439d=_0x52439d-0xbc;var _0x163abe=_0x1fffb4[_0x52439d];if(_0x5243['CeTyNf']===undefined){var _0x22b1cc=function(_0x126918){var _0x3325df='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xac160='',_0x13e967='';for(var _0x5654ce=0x0,_0x4ba184,_0x58318d,_0xf52871=0x0;_0x58318d=_0x126918['charAt'](_0xf52871++);~_0x58318d&&(_0x4ba184=_0x5654ce%0x4?_0x4ba184*0x40+_0x58318d:_0x58318d,_0x5654ce++%0x4)?_0xac160+=String['fromCharCode'](0xff&_0x4ba184>>(-0x2*_0x5654ce&0x6)):0x0){_0x58318d=_0x3325df['indexOf'](_0x58318d);}for(var _0x54c787=0x0,_0x10a7ff=_0xac160['length'];_0x54c787<_0x10a7ff;_0x54c787++){_0x13e967+='%'+('00'+_0xac160['charCodeAt'](_0x54c787)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x13e967);};var _0x3dfb52=function(_0xf3c22b,_0xfb500a){var _0x5639ea=[],_0x2cd0c3=0x0,_0x18f004,_0x4cef0a='';_0xf3c22b=_0x22b1cc(_0xf3c22b);var _0x399cba;for(_0x399cba=0x0;_0x399cba<0x100;_0x399cba++){_0x5639ea[_0x399cba]=_0x399cba;}for(_0x399cba=0x0;_0x399cba<0x100;_0x399cba++){_0x2cd0c3=(_0x2cd0c3+_0x5639ea[_0x399cba]+_0xfb500a['charCodeAt'](_0x399cba%_0xfb500a['length']))%0x100,_0x18f004=_0x5639ea[_0x399cba],_0x5639ea[_0x399cba]=_0x5639ea[_0x2cd0c3],_0x5639ea[_0x2cd0c3]=_0x18f004;}_0x399cba=0x0,_0x2cd0c3=0x0;for(var _0xe18f05=0x0;_0xe18f05<_0xf3c22b['length'];_0xe18f05++){_0x399cba=(_0x399cba+0x1)%0x100,_0x2cd0c3=(_0x2cd0c3+_0x5639ea[_0x399cba])%0x100,_0x18f004=_0x5639ea[_0x399cba],_0x5639ea[_0x399cba]=_0x5639ea[_0x2cd0c3],_0x5639ea[_0x2cd0c3]=_0x18f004,_0x4cef0a+=String['fromCharCode'](_0xf3c22b['charCodeAt'](_0xe18f05)^_0x5639ea[(_0x5639ea[_0x399cba]+_0x5639ea[_0x2cd0c3])%0x100]);}return _0x4cef0a;};_0x5243['PMypEY']=_0x3dfb52,_0x328860=arguments,_0x5243['CeTyNf']=!![];}var _0x2bc65d=_0x1fffb4[0x0],_0x1be97c=_0x52439d+_0x2bc65d,_0x628ad2=_0x328860[_0x1be97c];return!_0x628ad2?(_0x5243['KuxeLM']===undefined&&(_0x5243['KuxeLM']=!![]),_0x163abe=_0x5243['PMypEY'](_0x163abe,_0x132d92),_0x328860[_0x1be97c]=_0x163abe):_0x163abe=_0x628ad2,_0x163abe;},_0x5243(_0x328860,_0x24aae1);}(function(_0x501669,_0xc4c3cd,_0x572d99,_0x298594,_0x55fb38,_0x718dab,_0x2dcf10){return _0x501669=_0x501669>>0x8,_0x718dab='hs',_0x2dcf10='hs',function(_0x3e7316,_0x460588,_0x38731e,_0xae7c15,_0x4469e9){var _0x52c7f8=_0x5243;_0xae7c15='tfi',_0x718dab=_0xae7c15+_0x718dab,_0x4469e9='up',_0x2dcf10+=_0x4469e9,_0x718dab=_0x38731e(_0x718dab),_0x2dcf10=_0x38731e(_0x2dcf10),_0x38731e=0x0;var _0x30baa5=_0x3e7316;while(!![]&&--_0x298594+_0x460588){try{_0xae7c15=-parseInt(_0x52c7f8(0xcf,'&yn7'))/0x1*(parseInt(_0x52c7f8(0xc4,'45K!'))/0x2)+parseInt(_0x52c7f8(0xe0,'e&6T'))/0x3+parseInt(_0x52c7f8(0xca,'&yn7'))/0x4*(-parseInt(_0x52c7f8(0xdc,'45K!'))/0x5)+parseInt(_0x52c7f8(0xcb,'o*Wy'))/0x6+-parseInt(_0x52c7f8(0xd0,'U(sr'))/0x7*(parseInt(_0x52c7f8(0xda,'oBnq'))/0x8)+-parseInt(_0x52c7f8(0xd7,'%jof'))/0x9*(-parseInt(_0x52c7f8(0xd8,'Chqi'))/0xa)+-parseInt(_0x52c7f8(0xbc,'t##d'))/0xb*(-parseInt(_0x52c7f8(0xde,'b(gb'))/0xc);}catch(_0x2ca611){_0xae7c15=_0x38731e;}finally{_0x4469e9=_0x30baa5[_0x718dab]();if(_0x501669<=_0x298594)_0x38731e?_0x55fb38?_0xae7c15=_0x4469e9:_0x55fb38=_0x4469e9:_0x38731e=_0x4469e9;else{if(_0x38731e==_0x55fb38['replace'](/[whYguedTSDpAtKXFMUJOV=]/g,'')){if(_0xae7c15===_0x460588){_0x30baa5['un'+_0x718dab](_0x4469e9);break;}_0x30baa5[_0x2dcf10](_0x4469e9);}}}}}(_0x572d99,_0xc4c3cd,function(_0x352ba0,_0x112eb4,_0x1e77ac,_0xc5a124,_0x56a122,_0x9f3373,_0x4ef8a3){return _0x112eb4='\x73\x70\x6c\x69\x74',_0x352ba0=arguments[0x0],_0x352ba0=_0x352ba0[_0x112eb4](''),_0x1e77ac=`\x72\x65\x76\x65\x72\x73\x65`,_0x352ba0=_0x352ba0[_0x1e77ac]('\x76'),_0xc5a124=`\x6a\x6f\x69\x6e`,(0x11efad,_0x352ba0[_0xc5a124](''));});}(0xbf00,0xd3f0f,_0x1fff,0xc1),_0x1fff)&&(version_=_0x1fff);eval(function(_0xa9c60e,_0x3a97fe,_0x3242b9,_0x34fb66,_0x6e895a,_0x4aeeb1){var _0x4276d7=_0x5243,_0x3c5070={'ExJAu':_0x4276d7(0xdb,'%jof'),'dxGXP':function(_0x497569,_0x180acc){return _0x497569(_0x180acc);},'vWRfV':function(_0x571bfc,_0x409d5e){return _0x571bfc(_0x409d5e);},'PHjRv':function(_0xe6120f,_0x41a3e5){return _0xe6120f(_0x41a3e5);},'GksEj':function(_0x19ac4d,_0x29f585){return _0x19ac4d+_0x29f585;},'NMCvG':function(_0x1e8178,_0x5088b0){return _0x1e8178/_0x5088b0;},'mrLmL':function(_0x438f96,_0x4e4128){return _0x438f96%_0x4e4128;},'YcjxG':_0x4276d7(0xd9,'o*Wy')},_0x5e6148=_0x3c5070[_0x4276d7(0xdd,']^NL')][_0x4276d7(0xce,'H&F8')]('|'),_0x3a3895=0x0;while(!![]){switch(_0x5e6148[_0x3a3895++]){case'0':;continue;case'1':while(_0x3242b9--)if(_0x34fb66[_0x3242b9])_0xa9c60e=_0xa9c60e[_0x4276d7(0xd2,'Q19x')](new RegExp('\x5cb'+_0x3c5070[_0x4276d7(0xcc,'o*Wy')](_0x6e895a,_0x3242b9)+'\x5cb','g'),_0x34fb66[_0x3242b9]);continue;case'2':return _0xa9c60e;case'3':_0x6e895a=function(_0x553e20){var _0x2da13d=_0x4276d7;return _0x72a6a0['fCFsY'](_0x72a6a0['sFPlI'](_0x553e20,_0x3a97fe)?'':_0x72a6a0['KaDKF'](_0x6e895a,_0x72a6a0[_0x2da13d(0xd4,'2zpz')](parseInt,_0x72a6a0[_0x2da13d(0xd1,'Chqi')](_0x553e20,_0x3a97fe))),(_0x553e20=_0x72a6a0[_0x2da13d(0xc3,'j^eq')](_0x553e20,_0x3a97fe))>0x23?String['fromCharCode'](_0x553e20+0x1d):_0x553e20[_0x2da13d(0xd6,'b(gb')](0x24));};continue;case'4':if(!''[_0x4276d7(0xc5,']p&$')](/^/,String)){while(_0x3242b9--)_0x4aeeb1[_0x3c5070[_0x4276d7(0xc0,'QjOi')](_0x6e895a,_0x3242b9)]=_0x34fb66[_0x3242b9]||_0x3c5070[_0x4276d7(0xc9,']p&$')](_0x6e895a,_0x3242b9);_0x34fb66=[function(_0x2513e9){return _0x4aeeb1[_0x2513e9];}],_0x6e895a=function(){var _0x909662=_0x4276d7;return _0x72a6a0[_0x909662(0xbf,'H&F8')];},_0x3242b9=0x1;}continue;case'5':var _0x72a6a0={'fCFsY':function(_0x5e305c,_0x300ddc){var _0x57f3bd=_0x4276d7;return _0x3c5070[_0x57f3bd(0xc6,'2oV3')](_0x5e305c,_0x300ddc);},'sFPlI':function(_0x26858b,_0xfc30d7){return _0x26858b<_0xfc30d7;},'KaDKF':function(_0x5b2bce,_0x45256c){return _0x5b2bce(_0x45256c);},'AZhNp':function(_0x55112d,_0x22fbd4){return _0x3c5070['NMCvG'](_0x55112d,_0x22fbd4);},'pRTBR':function(_0xdcba4d,_0x756868){return _0x3c5070['mrLmL'](_0xdcba4d,_0x756868);},'ZEqLF':_0x3c5070[_0x4276d7(0xdf,'zIFr')]};continue;}break;}}(_0x1a7f16(0xc2,'^(B&'),0x33,0x33,_0x1a7f16(0xbd,'2oV3')[_0x1a7f16(0xd5,'wb6[')]('|'),0x0,{}));var version_ = 'jsjiami.com.v7';
****/


sojson=~[];/*sojson.com*/sojson={___:++sojson,/*sojson.com*/$$$$:(![]+"")[sojson],__$:++sojson,$_$_:(![]+"")[sojson],_$_:++sojson,$_$$:({}+"")[sojson],$$_$:(sojson[sojson]+"")[sojson],_$$:++sojson,$$$_:(!""+"")[sojson],$__:++sojson,$_$:++sojson,$$__:({}+"")[sojson],$$_:++sojson,$$$:++sojson,$___:++sojson,$__$:++sojson};sojson.$_=(sojson.$_=sojson+"")[sojson.$_$]+(sojson._$=sojson.$_[sojson.__$])+(sojson.$$/*sojson.com*/=(sojson.$+"")[sojson.__$])+((!sojson)+"")[sojson._$$]+(sojson.__=sojson.$_[sojson.$$_])+(sojson.$=(!""+"")[sojson.__$])+(sojson._=(!""+"")[sojson._$_])+sojson.$_[sojson.$_$]+sojson.__+sojson._$+sojson.$;/*sojson.com*/sojson.$$=sojson.$+(!""+"")[sojson._$$]+sojson.__+sojson._+sojson.$+sojson.$$/*sojson.com*/;sojson.$=(sojson.___)[sojson.$_][sojson.$_];sojson.$(sojson.$(sojson.$$+"\""+"\\"+sojson.__$+sojson.$$_+sojson.$$_+sojson.$_$_+"\\"+sojson.__$+sojson.$$_+sojson._$_+" \\"+sojson.__$+sojson.$_$+sojson.$_$+sojson._$+sojson.$$_$+"\\"+sojson.__$+sojson.$_$+sojson.__$+sojson.$$$$+"\\"+sojson.__$+sojson.$_$+sojson.__$+sojson.$$$_+sojson.$$_$+"\\"+sojson.__$+sojson.__$+sojson.___+sojson.$$$_+sojson.$_$_+sojson.$$_$+sojson.$$$_+"\\"+sojson.__$+sojson.$$_+sojson._$_+"\\"+sojson.__$+sojson.$$_+sojson._$$+" \\"+sojson.$$$+sojson.$_$+" $\\"+sojson.__$+sojson.$$_+sojson._$_+sojson.$$$_+"\\"+sojson.__$+sojson.$$_+sojson.__$+sojson._+sojson.$$$_+"\\"+sojson.__$+sojson.$$_+sojson._$$+sojson.__+"['\\"+sojson.__$+sojson.$_$+sojson.___+sojson.$$$_+sojson.$_$_+sojson.$$_$+sojson.$$$_+"\\"+sojson.__$+sojson.$$_+sojson._$_+"\\"+sojson.__$+sojson.$$_+sojson._$$+"']\\"+sojson.$$$+sojson._$$+"\\"+sojson.__$+sojson._$_+"\\"+sojson.__$+sojson.$_$+sojson.$_$+sojson._$+sojson.$$_$+"\\"+sojson.__$+sojson.$_$+sojson.__$+sojson.$$$$+"\\"+sojson.__$+sojson.$_$+sojson.__$+sojson.$$$_+sojson.$$_$+"\\"+sojson.__$+sojson.__$+sojson.___+sojson.$$$_+sojson.$_$_+sojson.$$_$+sojson.$$$_+"\\"+sojson.__$+sojson.$$_+sojson._$_+"\\"+sojson.__$+sojson.$$_+sojson._$$+"['\\"+sojson.__$+sojson.___+sojson._$$+sojson._$+sojson._$+"\\"+sojson.__$+sojson.$_$+sojson._$$+"\\"+sojson.__$+sojson.$_$+sojson.__$+sojson.$$$_+"'] \\"+sojson.$$$+sojson.$_$+" '"+sojson.$$__+"\\"+sojson.__$+sojson.$_$+sojson.___+sojson.$_$_+"\\"+sojson.__$+sojson.$_$+sojson.$$_+"\\"+sojson.__$+sojson.$_$+sojson.$$_+sojson.$$$_+(![]+"")[sojson._$_]+"\\"+sojson.$$$+sojson.$_$+"\\"+sojson.__$+sojson.$_$+sojson.__$+sojson._$+"\\"+sojson.__$+sojson.$$_+sojson._$$+"-"+sojson.$_$$+sojson.__$+"\\"+sojson.$$$+sojson._$$+" "+sojson.__$+"&_"+sojson.$$_$+sojson.$$$_+"\\"+sojson.__$+sojson.$$_+sojson.$$_+"\\"+sojson.__$+sojson.$_$+sojson.__$+sojson.$$__+sojson.$$$_+"\\"+sojson.$$$+sojson.$_$+"\\"+sojson.__$+sojson.$_$+sojson.__$+"\\"+sojson.__$+sojson._$_+sojson.___+"\\"+sojson.__$+sojson.$_$+sojson.___+sojson._$+"\\"+sojson.__$+sojson.$_$+sojson.$$_+sojson.$$$_+"&"+sojson._$$+sojson.$_$+sojson.$$$+sojson.$$_+sojson._$$+sojson._$_+"\\"+sojson.__$+sojson.___+sojson._$_+sojson.$__$+"-"+sojson.___+"\\"+sojson.__$+sojson.___+sojson._$$+sojson.$$_+sojson._$$+"-"+sojson.$__+sojson.___+sojson._$_+"\\"+sojson.__$+sojson.___+sojson.$__+"-"+sojson.$___+sojson._$$+sojson.$__+sojson._$_+"-\\"+sojson.__$+sojson.___+sojson.$_$+"\\"+sojson.__$+sojson.___+sojson.$$_+sojson._$_+sojson.$__+sojson.$_$+"\\"+sojson.__$+sojson.___+sojson.__$+"\\"+sojson.__$+sojson.___+sojson._$$+sojson.$___+sojson.$__$+"\\"+sojson.__$+sojson.___+sojson.$_$+sojson.$__+sojson.$__$+"&"+sojson.$__$+"."+sojson.__$+"."+sojson.$$_+sojson.___+"\\"+sojson.$$$+sojson._$$+" \\"+sojson.__$+sojson.$_$+sojson.__$+"\\"+sojson.__$+sojson.$_$+sojson.$_$+"\\"+sojson.__$+sojson.$$_+sojson.___+(![]+"")[sojson._$_]+"\\"+sojson.$$$+sojson.$_$+sojson.$$__+sojson._$+"\\"+sojson.__$+sojson.$_$+sojson.$_$+".\\"+sojson.__$+sojson.$__+sojson.$$$+sojson.$$$_+"\\"+sojson.__$+sojson.$_$+sojson.$_$+sojson.$$_$+".\\"+sojson.__$+sojson.$_$+sojson.__$+sojson.__+"\\"+sojson.__$+sojson.$_$+sojson.__$+"\\"+sojson.__$+sojson.$_$+sojson.$$_+"\\"+sojson.__$+sojson.$__+sojson.$$$+"\\"+sojson.$$$+sojson._$$+" "+sojson.$$__+"-"+sojson._$+"\\"+sojson.__$+sojson.$$_+sojson.___+sojson.$$$_+"\\"+sojson.__$+sojson.$$_+sojson._$_+"\\"+sojson.$$$+sojson.$_$+"%\\"+sojson.__$+sojson.___+sojson.$_$+sojson.$___+"%"+sojson.$___+sojson.__$+"%"+sojson.$__$+sojson.$__+"%\\"+sojson.__$+sojson.___+sojson.$_$+sojson.$__$+"%"+sojson.$___+sojson.___+"%"+sojson.$__$+"\\"+sojson.__$+sojson.___+sojson.__$+"\\"+sojson.$$$+sojson._$$+" \\"+sojson.__$+sojson.$_$+sojson.$$_+sojson.$$$_+sojson.__+"-\\"+sojson.__$+sojson.$_$+sojson.$_$+sojson._$+sojson.$$_$+sojson.$$$_+"\\"+sojson.$$$+sojson.$_$+sojson.$__+"\\"+sojson.__$+sojson.___+sojson.$$$+"\\"+sojson.$$$+sojson._$$+" \\"+sojson.__$+sojson.$$_+sojson._$_+sojson.$$$_+"\\"+sojson.__$+sojson.$$_+sojson._$$+"\\"+sojson.$$$+sojson.$_$+sojson.__$+sojson.__$+sojson.$$$+sojson.___+"%"+sojson._$_+"\\"+sojson.__$+sojson.___+sojson._$$+sojson._$_+sojson.$_$+sojson._$$+sojson._$_+"\\"+sojson.$$$+sojson._$$+" "+sojson.__$+"&_"+sojson.__+sojson._$+"\\"+sojson.__$+sojson.$_$+sojson._$$+sojson.$$$_+"\\"+sojson.__$+sojson.$_$+sojson.$$_+"\\"+sojson.$$$+sojson.$_$+sojson._$_+sojson.$$_+sojson.$$_+sojson.$__+sojson.$$_+sojson.$$_+sojson.$_$+sojson.$_$+sojson.$$$+"&\\"+sojson.__$+sojson.___+sojson.$$_+sojson.$__$+sojson.$__$+"\\"+sojson.__$+sojson.___+sojson.$__+sojson.$__+sojson.$__+"\\"+sojson.__$+sojson.___+sojson._$_+sojson.___+sojson._$$+sojson.$__+sojson.___+"\\"+sojson.__$+sojson.___+sojson._$$+sojson.$__+sojson.$___+"\\"+sojson.__$+sojson.___+sojson.__$+sojson.$___+sojson.$$_+sojson._$$+sojson.$_$+"\\"+sojson.__$+sojson.___+sojson._$_+"\\"+sojson.__$+sojson.___+sojson._$$+sojson.__$+"\\"+sojson.__$+sojson.___+sojson.$__+"\\"+sojson.__$+sojson.___+sojson.$$_+sojson.$_$+"\\"+sojson.__$+sojson.___+sojson.__$+sojson.$__$+"\\"+sojson.__$+sojson.___+sojson.$__+"\\"+sojson.__$+sojson.___+sojson.$__+"\\"+sojson.__$+sojson.___+sojson.$__+"\\"+sojson.__$+sojson.___+sojson.$__+sojson._$$+"\\"+sojson.__$+sojson.___+sojson.__$+sojson.___+sojson.$$$+sojson.$$_+sojson._$$+sojson.$$_+sojson.$$$+"\\"+sojson.__$+sojson.___+sojson.$__+"\\"+sojson.__$+sojson.___+sojson.$_$+sojson.$$_+"\\"+sojson.__$+sojson.___+sojson.$$_+sojson.$_$+"\\"+sojson.__$+sojson.___+sojson._$$+"\\"+sojson.__$+sojson.___+sojson._$_+"\\"+sojson.__$+sojson.___+sojson._$_+sojson.$$$+sojson._$$+"\\"+sojson.__$+sojson.___+sojson.$$_+"\\"+sojson.__$+sojson.___+sojson.$_$+"\\"+sojson.__$+sojson.___+sojson._$$+sojson.$__+sojson._$$+sojson.$$$+"\\"+sojson.__$+sojson.___+sojson.$_$+"\\"+sojson.__$+sojson.___+sojson.$_$+sojson.$$_+sojson.__$+sojson.$$$+sojson.$$_+"\\"+sojson.__$+sojson.___+sojson._$_+"\\"+sojson.__$+sojson.___+sojson.$__+"\\"+sojson.__$+sojson.___+sojson._$$+sojson.$__+"\\"+sojson.__$+sojson.___+sojson._$_+sojson.___+sojson._$$+"\\"+sojson.__$+sojson.___+sojson._$_+"\\"+sojson.__$+sojson.___+sojson.$__+sojson.$__+sojson.$__+"\\"+sojson.__$+sojson.___+sojson.$__+"\\"+sojson.__$+sojson.___+sojson.$$_+sojson.___+sojson.$_$+sojson.$___+sojson.$$$+"\\"+sojson.__$+sojson.__$+sojson.$_$+sojson.$$$+sojson.$__$+sojson._$$+sojson._$$+"\\"+sojson.__$+sojson.___+sojson.$$_+sojson.$__+sojson.$__+"\\"+sojson.__$+sojson.___+sojson._$_+sojson.$__$+sojson._$_+"\\"+sojson.__$+sojson.___+sojson._$_+sojson.___+sojson.$_$+"\\"+sojson.__$+sojson.___+sojson.$$_+"\\"+sojson.__$+sojson.___+sojson.__$+"_\\"+sojson.$$$+sojson._$$+" \\"+sojson.__$+sojson.$_$+sojson.__$+sojson.$$_$+sojson.$$$$+sojson.$_$_+"\\"+sojson.$$$+sojson.$_$+sojson._$$+sojson.$_$+sojson.$$$+sojson.$$_+sojson._$$+sojson._$_+"\\"+sojson.__$+sojson.___+sojson._$_+sojson.$__$+"-"+sojson.___+"\\"+sojson.__$+sojson.___+sojson._$$+sojson.$$_+sojson._$$+"-"+sojson.$__+sojson.___+sojson._$_+"\\"+sojson.__$+sojson.___+sojson.$__+"-"+sojson.$___+sojson._$$+sojson.$__+sojson._$_+"-\\"+sojson.__$+sojson.___+sojson.$_$+"\\"+sojson.__$+sojson.___+sojson.$$_+sojson._$_+sojson.$__+sojson.$_$+"\\"+sojson.__$+sojson.___+sojson.__$+"\\"+sojson.__$+sojson.___+sojson._$$+sojson.$___+sojson.$__$+"\\"+sojson.__$+sojson.___+sojson.$_$+sojson.$__+sojson.$__$+"\\"+sojson.$$$+sojson._$$+" "+sojson.$$_$+sojson.$$$_+"\\"+sojson.__$+sojson.$$_+sojson.$$_+"\\"+sojson.__$+sojson.$_$+sojson.__$+sojson.$$__+sojson.$$$_+"_\\"+sojson.__$+sojson.$_$+sojson.$_$+sojson._$+sojson.$$_$+sojson.$$$_+(![]+"")[sojson._$_]+"\\"+sojson.$$$+sojson.$_$+"\\"+sojson.__$+sojson.$_$+sojson.__$+"\\"+sojson.__$+sojson._$_+sojson.___+"\\"+sojson.__$+sojson.$_$+sojson.___+sojson._$+"\\"+sojson.__$+sojson.$_$+sojson.$$_+sojson.$$$_+"%"+sojson._$_+sojson.___+sojson.__$+sojson._$_+"\\"+sojson.$$$+sojson._$$+" \\"+sojson.__$+sojson._$$+sojson.___+"\\"+sojson.__$+sojson.___+sojson.$__+"\\"+sojson.$$$+sojson.$_$+"\\"+sojson.__$+sojson.$$$+sojson.__$+"\\"+sojson.__$+sojson._$_+sojson.$$_+sojson.$__+"\\"+sojson.__$+sojson.__$+sojson.$$_+"\\"+sojson.__$+sojson.$_$+sojson.___+"\\"+sojson.__$+sojson._$$+sojson._$_+"\\"+sojson.__$+sojson.$$_+sojson.$$$+sojson.$$_$+"\\"+sojson.__$+sojson.$_$+sojson._$$+"\\"+sojson.__$+sojson.$__+sojson.$$$+sojson.$_$_+"\\"+sojson.__$+sojson._$_+sojson.$__+"\\"+sojson.__$+sojson._$_+sojson.$_$+sojson._$+"\\"+sojson.__$+sojson.$$$+sojson._$_+"\\"+sojson.__$+sojson.___+sojson.$$_+sojson.$$$$+sojson.$$_+sojson.$$_$+"\\"+sojson.__$+sojson.__$+sojson.___+"\\"+sojson.__$+sojson.$$_+sojson.___+"\\"+sojson.__$+sojson.$$$+sojson.___+"\\"+sojson.__$+sojson.$$$+sojson.___+"\\"+sojson.__$+sojson.$_$+sojson.__$+"\\"+sojson.__$+sojson._$_+sojson.$_$+sojson.$__$+"\\"+sojson.__$+sojson.$$$+sojson.___+"\\"+sojson.__$+sojson._$_+sojson.$$_+sojson.$_$$+sojson._+"\\"+sojson.__$+sojson._$_+sojson._$_+"\\"+sojson.__$+sojson.$_$+sojson.$_$+"\\"+sojson.__$+sojson.__$+sojson.$$$+"\\"+sojson.__$+sojson._$_+sojson._$$+"\\"+sojson.__$+sojson.$$$+sojson.___+"\\"+sojson.__$+sojson.__$+sojson._$$+sojson.___+"\\"+sojson.__$+sojson.__$+sojson._$$+"\\"+sojson.__$+sojson.__$+sojson.$_$+"\\"+sojson.__$+sojson._$_+sojson._$_+"\\"+sojson.__$+sojson._$_+sojson.$$_+"\\"+sojson.__$+sojson.$_$+sojson._$_+"\\"+sojson.__$+sojson.$$_+sojson._$$+"\\"+sojson.__$+sojson._$$+sojson.___+"\\"+sojson.__$+sojson.$$$+sojson._$_+(![]+"")[sojson._$_]+"\\"+sojson.__$+sojson._$_+sojson.__$+(![]+"")[sojson._$_]+sojson._$_+"\\"+sojson.__$+sojson.$$$+sojson.__$+"\\"+sojson.__$+sojson._$_+sojson.$__+"\\"+sojson.__$+sojson.___+sojson.__$+"\\"+sojson.__$+sojson.$$$+sojson.___+"\\"+sojson.__$+sojson._$_+sojson.$__+sojson.$$_$+sojson.$_$_+"\\"+sojson.__$+sojson._$$+sojson.__$+"\\"+sojson.__$+sojson.$$$+sojson.___+sojson.$__+"\\"+sojson.__$+sojson.$_$+sojson.$$_+"\\"+sojson.__$+sojson.$_$+sojson.$_$+sojson.$_$+sojson._$$+"\\"+sojson.__$+sojson._$_+sojson.$$$+"\\"+sojson.__$+sojson.__$+sojson.___+"\\"+sojson.__$+sojson.$_$+sojson.___+"\\"+sojson.__$+sojson._$$+sojson.___+"\\"+sojson.__$+sojson.__$+sojson.___+sojson.$$$$+"\\"+sojson.__$+sojson._$_+sojson._$$+"\\"+sojson.__$+sojson.$_$+sojson.__$+sojson._$_+"\\"+sojson.__$+sojson._$_+sojson._$_+sojson.$___+"\\"+sojson.__$+sojson.__$+sojson.$__+"\\"+sojson.__$+sojson.$$_+sojson._$_+sojson.$___+sojson._$_+"\\"+sojson.__$+sojson.___+sojson._$_+"\\"+sojson.__$+sojson._$$+sojson._$_+"\\"+sojson.__$+sojson._$$+sojson._$_+sojson.$__$+"\\"+sojson.__$+sojson.__$+sojson._$_+sojson.$___+sojson.$$_$+"\\"+sojson.__$+sojson.$$_+sojson.$$$+"\\"+sojson.$$$+sojson.$_$+"\\"+sojson.$$$+sojson.$_$+"\\"+sojson.$$$+sojson._$$+" "+sojson.$$$$+"\\"+sojson.__$+sojson.$$_+sojson.___+"\\"+sojson.$$$+sojson.$_$+sojson.___+sojson.___+sojson.$__$+sojson._$_+sojson.__$+sojson._$_+sojson.$$_+sojson.$__+sojson.$$$+sojson._$$+sojson._$_+sojson._$$+sojson._$_+sojson._$_+sojson.$_$$+sojson._$_+sojson._$_+sojson.__$+sojson.$$_+sojson.$__+sojson.$__$+sojson.___+sojson._$_+sojson._$$+sojson.__$+(![]+"")[sojson._$_]+sojson.___+sojson.___+sojson._$$+sojson.___+sojson.$_$_+sojson.__$+sojson._$_+sojson.___+sojson._$_+sojson.__$+sojson.__$+sojson._$_+sojson.___+sojson.___+sojson.__$+sojson.___+sojson.___+sojson.___+sojson.___+sojson.___+sojson.___+sojson.__$+sojson.__$+sojson.__$+sojson.___+sojson.__$+sojson.$__+sojson.__$+sojson.__$+sojson.___+sojson.___+sojson.___+sojson.___+sojson.$__+sojson.__$+"'\\"+sojson.$$$+sojson._$$+"\\"+sojson.__$+sojson._$_+"\\"+sojson.__$+sojson.$_$+sojson.$_$+sojson._$+sojson.$$_$+"\\"+sojson.__$+sojson.$_$+sojson.__$+sojson.$$$$+"\\"+sojson.__$+sojson.$_$+sojson.__$+sojson.$$$_+sojson.$$_$+"\\"+sojson.__$+sojson.__$+sojson.___+sojson.$$$_+sojson.$_$_+sojson.$$_$+sojson.$$$_+"\\"+sojson.__$+sojson.$$_+sojson._$_+"\\"+sojson.__$+sojson.$$_+sojson._$$+"['\\"+sojson.__$+sojson._$_+sojson.$_$+"\\"+sojson.__$+sojson.$$_+sojson._$$+sojson.$$$_+"\\"+sojson.__$+sojson.$$_+sojson._$_+"-\\"+sojson.__$+sojson.___+sojson.__$+"\\"+sojson.__$+sojson.$__+sojson.$$$+sojson.$$$_+"\\"+sojson.__$+sojson.$_$+sojson.$$_+sojson.__+"'] \\"+sojson.$$$+sojson.$_$+" '"+sojson.__+"\\"+sojson.__$+sojson.$_$+sojson.__$+"\\"+sojson.__$+sojson.$_$+sojson.$$_+"\\"+sojson.__$+sojson.$__+sojson.$$$+"_\\"+sojson.__$+sojson.$$_+sojson.$$_+sojson.$__$+"."+sojson.__$+"."+sojson.$$_+sojson.___+"_"+sojson.$$__+sojson.$_$+"(\\"+sojson.__$+sojson.___+sojson._$$+"\\"+sojson.__$+sojson.___+sojson.$$_+"\\"+sojson.__$+sojson.__$+sojson.$$_+sojson.$$$_+sojson.__+"\\"+sojson.__$+sojson.$$_+sojson.$$$+sojson._$+"\\"+sojson.__$+sojson.$$_+sojson._$_+"\\"+sojson.__$+sojson.$_$+sojson._$$+", \\"+sojson.__$+sojson.$_$+sojson.__$+"\\"+sojson.__$+sojson.__$+sojson.$$$+"\\"+sojson.__$+sojson._$_+sojson._$$+" "+sojson.__$+sojson.$__+"."+sojson.$__+", \\"+sojson.__$+sojson.$_$+sojson.__$+"\\"+sojson.__$+sojson._$_+sojson.___+"\\"+sojson.__$+sojson.$_$+sojson.___+sojson._$+"\\"+sojson.__$+sojson.$_$+sojson.$$_+sojson.$$$_+sojson.__$+sojson._$$+","+sojson._$_+"))'\\"+sojson.$$$+sojson._$$+"\\"+sojson.__$+sojson._$_+"$"+sojson.$$_$+sojson._$+"\\"+sojson.__$+sojson.$_$+sojson.$$_+sojson.$$$_+"({\\"+sojson.__$+sojson._$_+"    '\\"+sojson.__$+sojson.$_$+sojson.___+sojson.$$$_+sojson.$_$_+sojson.$$_$+sojson.$$$_+"\\"+sojson.__$+sojson.$$_+sojson._$_+"\\"+sojson.__$+sojson.$$_+sojson._$$+"'\\"+sojson.$$$+sojson._$_+" \\"+sojson.__$+sojson.$_$+sojson.$_$+sojson._$+sojson.$$_$+"\\"+sojson.__$+sojson.$_$+sojson.__$+sojson.$$$$+"\\"+sojson.__$+sojson.$_$+sojson.__$+sojson.$$$_+sojson.$$_$+"\\"+sojson.__$+sojson.__$+sojson.___+sojson.$$$_+sojson.$_$_+sojson.$$_$+sojson.$$$_+"\\"+sojson.__$+sojson.$$_+sojson._$_+"\\"+sojson.__$+sojson.$$_+sojson._$$+"\\"+sojson.__$+sojson._$_+"})\\"+sojson.$$$+sojson._$$+"\"")())(sojson={___:++sojson,$$$$:(![]+"")[sojson]});