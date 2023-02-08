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
     obj.data.nickname = "by~伟人";
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
     obj.data.userInfo.userNickName = "by~伟人";
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
