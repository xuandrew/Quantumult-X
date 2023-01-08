/*

const version = 'V2.0.81';


const mainConfig={isDebug:!1,removeHomeVip:!0,removeHomeCreatorTask:!0,removeRelate:!0,removeGood:!0,removeFollow:!1,modifyMenus:!0,removeRelateItem:!0,removeRecommendItem:!0,removeRewardItem:!1,removeLiveMedia:!1,removeNextVideo:!0,removePinedTrending:!1,removeInterestFriendInTopic:!1,removeInterestTopic:!1,removeInterestUser:!1,removeLvZhou:!0,removeSearchWindow:!0,profileSkin1:null,profileSkin2:null,tabIconVersion:0,tabIconPath:""},itemMenusConfig={creator_task:!0,mblog_menus_custom:!0,mblog_menus_video_later:!0,mblog_menus_comment_manager:!0,mblog_menus_avatar_widget:!0,mblog_menus_card_bg:!0,mblog_menus_long_picture:!0,mblog_menus_delete:!0,mblog_menus_edit:!0,mblog_menus_edit_history:!0,mblog_menus_edit_video:!0,mblog_menus_sticking:!0,mblog_menus_open_reward:!0,mblog_menus_novelty:!0,mblog_menus_favorite:!0,mblog_menus_promote:!0,mblog_menus_modify_visible:!0,mblog_menus_copy_url:!0,mblog_menus_follow:!0,mblog_menus_video_feedback:!0,mblog_menus_shield:!0,mblog_menus_report:!0,mblog_menus_apeal:!0,mblog_menus_home:!0},modifyCardsUrls=["/cardlist","video/community_tab","/searchall"],modifyStatusesUrls=["statuses/friends/timeline","statuses/unread_friends_timeline","statuses/unread_hot_timeline","groups/timeline","statuses/friends_timeline"],otherUrls={"/profile/me":"removeHome","/statuses/extend":"itemExtendHandler","/video/remind_info":"removeVideoRemind","/checkin/show":"removeCheckin","/live/media_homelist":"removeMediaHomelist","/comments/build_comments":"removeComments","/container/get_item":"containerHandler","/profile/container_timeline":"userHandler","/video/tiny_stream_video_list":"nextVideoHandler","/2/statuses/video_mixtimeline":"nextVideoHandler","/!/client/light_skin":"tabSkinHandler","/littleskin/preview":"skinPreviewHandler","/search/finder":"removeSearchMain","/search/container_timeline":"removeSearch","/search/container_discover":"removeSearch","/2/messageflow":"removeMsgAd","/2/page?":"removePage","/statuses/unread_topic_timeline":"topicHandler","square&pageDataType":"squareHandler","/statuses/container_timeline_topic":"removeMain","/statuses/container_timeline":"removeMainTab","wbapplua/wbpullad.lua":"removeLuaScreenAds","interface/sdk/sdkad.php":"removePhpScreenAds","ct=feed&a=trends":"removeTopics",user_center:"modifiedUserCenter","a=get_coopen_ads":"removeIntlOpenAds","php?a=search_topic":"removeSearchTopic"};function getModifyMethod(e){for(let t of modifyCardsUrls)if(e.indexOf(t)>-1)return"removeCards";for(let o of modifyStatusesUrls)if(e.indexOf(o)>-1)return"removeTimeLine";for(let[i,n]of Object.entries(otherUrls))if(e.indexOf(i)>-1)return n;return null}function removeIntlOpenAds(e){return e.data&&0!==e.data.length&&(e.data.ad_list=[],e.data.gdt_video_ad_ios=[],e.data.display_ad=0,e.data.ad_ios_id=null,e.data.app_ad_ios_id=null,e.data.reserve_ad_ios_id="",e.data.reserve_app_ad_ios_id="",e.data.ad_duration=604800,e.data.ad_cd_interval=604800,e.data.pic_ad=[]),e}function removeSearchTopic(e){return e.data&&0!==e.data.length&&(e.data=Object.values(e.data).filter(e=>"searchtop"!=e.type)),e}function modifiedUserCenter(e){return e.data&&0!==e.data.length&&e.data.cards&&(e.data.cards=Object.values(e.data.cards).filter(e=>"personal_vip"!=e.items[0].type)),e}function removeTopics(e){return e.data&&(e.data.topics&&delete e.data.topics,e.data.discover&&delete e.data.discover),e}function isAd(e){return!!e&&!!("广告"==e.mblogtypename||"热推"==e.mblogtypename||"廣告"==e.mblogtypename||"熱推"==e.mblogtypename||e.promotion&&"ad"==e.promotion.type||e.common_struct&&e.common_struct[0]?.actionlog?.source?.includes("ad"))}function squareHandler(e){return e.items,e}function removeMainTab(e){if(e.loadedInfo&&e.loadedInfo.headers&&delete e.loadedInfo.headers,!e.items)return e;let t=[];for(let o of e.items)isAd(o.data)||(o.data?.common_struct&&delete o.data.common_struct,o.category?"group"!=o.category&&t.push(o):t.push(o));return e.items=t,log("removeMainTab success"),e}function removeMain(e){if(e.loadedInfo&&e.loadedInfo.headers&&delete e.loadedInfo.headers,!e.items)return e;let t=[];for(let o of e.items)if("feed"==o.category)isAd(o.data)||t.push(o);else if("group"==o.category){if(o.items.length>0&&o.items[0].data?.itemid?.includes("search_input"))o.items=o.items.filter(e=>e?.data?.itemid?.includes("mine_topics")||e?.data?.itemid?.includes("search_input")),o.items[0].data.hotwords=[{word:"搜索超话",tip:""}],t.push(o);else{if(o.items.length>0&&o.items[0].data?.itemid?.includes("top_title"))continue;t.push(o)}}else -1==[202,200].indexOf(o.data.card_type)&&t.push(o);return e.items=t,log("removeMain success"),e}function topicHandler(e){let t=e.cards;if(!t||!mainConfig.removeUnfollowTopic&&!mainConfig.removeUnusedPart)return e;let o=[];for(let i of t){let n=!0;if(i.mblog){let a=i.mblog.buttons;mainConfig.removeUnfollowTopic&&a&&"follow"==a[0].type&&(n=!1)}else{if(!mainConfig.removeUnusedPart)continue;if("bottom_mix_activity"==i.itemid)n=!1;else if(i?.top?.title=="正在活跃")n=!1;else if(200==i.card_type&&i.group)n=!1;else{let r=i.card_group;if(!r)continue;if(["guess_like_title","cats_top_title","chaohua_home_readpost_samecity_title"].indexOf(r[0].itemid)>-1)n=!1;else if(r.length>1){let d=[];for(let s of r)-1==["chaohua_discovery_banner_1","bottom_mix_activity"].indexOf(s.itemid)&&d.push(s);i.card_group=d}}}n&&o.push(i)}return e.cards=o,log("topicHandler success"),e}function removeSearchMain(e){let t=e.channelInfo.channels;if(!t)return e;let o=[];for(let i of t)i.payload&&(removeSearch(i.payload),o.push(i));return e.channelInfo.channels=o,log("remove_search main success"),e}function checkSearchWindow(e){return!!mainConfig.removeSearchWindow&&"card"==e.category&&(e.data?.itemid=="finder_window"||e.data?.itemid=="more_frame"||e.data?.card_type==208||e.data?.card_type==217||e.data?.card_type==19||e.data?.mblog?.page_info?.actionlog?.source?.includes("ad"))}function removeSearch(e){if(!e.items)return e;let t=[];for(let o of e.items)if("feed"==o.category)isAd(o.data)||t.push(o);else{if("group"==o.category)continue;checkSearchWindow(o)||t.push(o)}return e.items=t,e.loadedInfo&&(e.loadedInfo.searchBarContent=[],e.loadedInfo.headerBack&&(e.loadedInfo.headerBack.channelStyleMap={})),log("remove_search success"),e}function removeMsgAd(e){if(!e.messages)return;let t=[];for(let o of e.messages)!o.msg_card?.ad_tag&&t.push(o);return e.messages=t,e}function removePage(e){return removeCards(e),mainConfig.removePinedTrending&&e.cards&&e.cards.length>0&&e.cards[0].card_group&&(e.cards[0].card_group=e.cards[0].card_group.filter(e=>!(e?.actionlog?.ext?.includes("ads_wor")||e?.itemid?.includes("t:51")||e?.itemid?.includes("ads_wor")))),e}function removeCards(e){if(!e.cards)return;let t=[];for(let o of e.cards){let i=o.card_group;if(i&&i.length>0){let n=[];for(let a of i)118!=a.card_type&&n.push(a);o.card_group=n,t.push(o)}else{let r=o.card_type;if([9,165].indexOf(r)>-1)isAd(o.mblog)||t.push(o);else{if([1007,180].indexOf(r)>-1)continue;t.push(o)}}}e.cards=t}function lvZhouHandler(e){if(!mainConfig.removeLvZhou||!e)return;let t=e.common_struct;if(!t)return;let o=[];for(let i of t)"绿洲"!=i.name&&o.push(i);e.common_struct=o}function isBlock(e){let t=mainConfig.blockIds||[];if(0===t.length)return!1;let o=e.user.id;for(let i of t)if(i==o)return!0;return!1}function removeTimeLine(e){for(let t of["ad","advertises","trends","headers"])e[t]&&delete e[t];if(!e.statuses)return;let o=[];for(let i of e.statuses)isAd(i)||(lvZhouHandler(i),i.common_struct&&delete i.common_struct,i.category?"group"!=i.category&&o.push(i):o.push(i));e.statuses=o}function removeHomeVip(e){return e.header&&e.header.vipView&&(e.header.vipView=null),e}function removeVideoRemind(e){e.bubble_dismiss_time=0,e.exist_remind=!1,e.image_dismiss_time=0,e.image="",e.tag_image_english="",e.tag_image_english_dark="",e.tag_image_normal="",e.tag_image_normal_dark=""}function itemExtendHandler(e){if((mainConfig.removeRelate||mainConfig.removeGood)&&e.trend&&e.trend.titles){let t=e.trend.titles.title;mainConfig.removeRelate&&"相关推荐"===t?delete e.trend:mainConfig.removeGood&&"博主好物种草"===t&&delete e.trend}mainConfig.removeFollow&&e.follow_data&&(e.follow_data=null),mainConfig.removeRewardItem&&e.reward_info&&(e.reward_info=null),e.page_alerts&&(e.page_alerts=null);try{e.trend.extra_struct.extBtnInfo.btn_picurl.indexOf("timeline_icon_ad_delete")>-1&&delete e.trend}catch(o){}if(mainConfig.modifyMenus&&e.custom_action_list){let i=[];for(let n of e.custom_action_list){let a=n.type,r=itemMenusConfig[a];void 0===r?i.push(n):"mblog_menus_copy_url"===a?i.unshift(n):r&&i.push(n)}e.custom_action_list=i}}function updateFollowOrder(e){try{for(let t of e.items)if("mainnums_friends"===t.itemId){let o=t.click.modules[0].scheme;t.click.modules[0].scheme=o.replace("231093_-_selfrecomm","231093_-_selffollowed"),log("updateFollowOrder success");return}}catch(i){console.log("updateFollowOrder fail")}}function updateProfileSkin(e,t){try{let o=mainConfig[t];if(!o)return;let i=0;for(let n of e.items)if(n.image)try{dm=n.image.style.darkMode,"alpha"!=dm&&(n.image.style.darkMode="alpha"),n.image.iconUrl=o[i++],n.dot&&(n.dot=[])}catch(a){}log("updateProfileSkin success")}catch(r){console.log("updateProfileSkin fail")}}function removeHome(e){if(!e.items)return e;let t=[];for(let o of e.items){let i=o.itemId;if("profileme_mine"==i)mainConfig.removeHomeVip&&(o=removeHomeVip(o)),o.header?.vipIcon&&delete o.header.vipIcon,updateFollowOrder(o),t.push(o);else if("100505_-_top8"==i)updateProfileSkin(o,"profileSkin1"),t.push(o);else if("100505_-_newcreator"==i)"grid"==o.type?(updateProfileSkin(o,"profileSkin2"),t.push(o)):mainConfig.removeHomeCreatorTask||t.push(o);else{if(["mine_attent_title","100505_-_meattent_pic","100505_-_newusertask","100505_-_vipkaitong","100505_-_hongbao2022","100505_-_adphoto","100505_-_advideo"].indexOf(i)>-1||i.match(/100505_-_meattent_-_\d+/))continue;t.push(o)}}return e.items=t,e}function removeCheckin(e){log("remove tab1签到"),e.show=0}function removeMediaHomelist(e){mainConfig.removeLiveMedia&&(log("remove 首页直播"),e.data={})}function removeComments(e){let t=["广告","廣告"];mainConfig.removeRelateItem&&t.push(...["相关内容","相關內容"]),mainConfig.removeRecommendItem&&t.push(...["推荐","热推","推薦","熱推"]);let o=e.datas||[];if(0===o.length)return;let i=[];for(let n of o){let a=n.adType||"";-1==t.indexOf(a)&&6!=n.type&&i.push(n)}log("remove 评论区相关和推荐内容"),e.datas=i}function containerHandler(e){mainConfig.removeInterestFriendInTopic&&"超话里的好友"===e.card_type_name&&(log("remove 超话里的好友"),e.card_group=[]),mainConfig.removeInterestTopic&&e.itemid&&(e.itemid.indexOf("infeed_may_interest_in")>-1?(log("remove 感兴趣的超话"),e.card_group=[]):e.itemid.indexOf("infeed_friends_recommend")>-1&&(log("remove 超话好友关注"),e.card_group=[]))}function userHandler(e){if(e=removeMainTab(e),!mainConfig.removeInterestUser||!e.items)return e;let t=[];for(let o of e.items){let i=!0;if("group"==o.category)try{"可能感兴趣的人"==o.items[0].data.desc&&(i=!1)}catch(n){}i&&(o.data?.common_struct&&delete o.data.common_struct,t.push(o))}return e.items=t,log("removeMain sub success"),e}function nextVideoHandler(e){if(!e.statuses)return e;let t=[];for(let o of e.statuses)isAd(o)||t.push(o);return e.statuses=t,log("removeMainTab Success"),e}function tabSkinHandler(e){try{let t=mainConfig.tabIconVersion;if(e.data.canUse=1,!t||!mainConfig.tabIconPath||t<100)return;let o=e.data.list;for(let i of o)i.version=t,i.downloadlink=mainConfig.tabIconPath;log("tabSkinHandler success")}catch(n){log("tabSkinHandler fail")}}function skinPreviewHandler(e){e.data.skin_info.status=1}function removeLuaScreenAds(e){if(!e.cached_ad)return e;for(let t of e.cached_ad.ads)t.start_date=1893254400,t.show_count=0,t.duration=0,t.end_date=1893340799;return e}function removePhpScreenAds(e){if(!e.ads)return e;for(let t of(e.show_push_splash_ad=!1,e.background_delay_display_time=86400,e.lastAdShow_delay_display_time=604800,e.realtime_ad_video_stall_time=86400,e.realtime_ad_timeout_duration=604800,e.ads))t.displaytime=0,t.displayintervel=86400,t.allowdaydisplaynum=0,t.displaynum=0,t.displaytime=1,t.begintime="2029-12-30 00:00:00",t.endtime="2029-12-30 23:59:59";return e}function log(e){mainConfig.isDebug&&console.log(e)}var body=$response.body,url=$request.url;let method=getModifyMethod(url);if(method){log(method);var func=eval(method);let data=JSON.parse(body.match(/\{.*\}/)[0]);new func(data),body=JSON.stringify(data),"removePhpScreenAds"==method&&(body=JSON.stringify(data)+"OK")}$done({body});

*/



// https://github.com/zmqcherish/proxy-script/blob/main/weibo_main.js
// 2023-01-07 17:35

// 屏蔽用户id获取方法
// 进入用户主页 选择复制链接 得到类似 `https://weibo.com/u/xxx` 的文本 xxx即为用户id 多个id用英文逗号 `,` 分开
// 主要的选项配置
const mainConfig = {
  blockIds: [],	//屏蔽的用户id列表
  modifyMenus: true, // 编辑上下文菜单
  removeExtendInfo: false, // 删除拓展卡片
  removeFollow: false, // 关注博主
  removeHomeVip: true, // 个人中心的 vip 栏
  removeLiveMedia: false, // 首页直播
  removeGood: true, // 微博主好物种草
  removeInterestFriendInTopic: false, // 超话 超话里的好友
  removeInterestTopic: false, // 超话 可能感兴趣的超话 + 好友关注
  removeInterestUser: false, // 用户页 可能感兴趣的人
  removeLvZhou: true, // 绿洲模块
  removeNextVideo: true, // 关闭自动播放下一个视频
  removePinedTrending: true, // 删除热搜列表置顶条目
  removeRelate: true, // 相关推荐
  removeRelateItem: true, // 评论区相关内容
  removeRecommendItem: true, // 评论区推荐内容
  removeRewardItem: false, // 微博详情页打赏模块
  removeSearchWindow: true, // 搜索页滑动窗口 有的不是广告
  removeUnfollowTopic: false, // 超话 未关注的
  removeUnusedPart: true // 超话 乱七八糟没用的部分
};

// 菜单配置
const itemMenusConfig = {
  creator_task: true, // 转发任务
  mblog_menus_custom: true, // 寄微博
  mblog_menus_video_later: true, // 可能是稍后再看 没出现过
  mblog_menus_comment_manager: true, // 评论管理
  mblog_menus_avatar_widget: true, // 头像挂件
  mblog_menus_card_bg: true, // 卡片背景
  mblog_menus_long_picture: true, // 生成长图
  mblog_menus_delete: true, // 删除
  mblog_menus_edit: true, // 编辑
  mblog_menus_edit_history: true, // 编辑记录
  mblog_menus_edit_video: true, // 编辑视频
  mblog_menus_sticking: true, // 置顶
  mblog_menus_open_reward: true, // 赞赏
  mblog_menus_novelty: true, // 新鲜事投稿
  mblog_menus_favorite: true, // 收藏
  mblog_menus_promote: true, // 推广
  mblog_menus_modify_visible: true, // 设置分享范围
  mblog_menus_copy_url: true, // 复制链接
  mblog_menus_follow: true, // 关注
  mblog_menus_video_feedback: true, // 播放反馈
  mblog_menus_shield: true, // 屏蔽
  mblog_menus_report: true, // 投诉
  mblog_menus_apeal: true, // 申诉
  mblog_menus_home: true // 返回首页
};
const modifyCardsUrls = ["/2/cardlist", "/2/video/community_tab", "/2/searchall"];
const modifyStatusesUrls = [
  "/2/groups/timeline",
  "/2/statuses/friends/timeline",
  "/2/statuses/unread_friends_timeline",
  "/2/statuses/unread_hot_timeline"
];
const otherUrls = {
  "/2/checkin/show": "removeCheckin", // 签到任务
  "/2/comments/build_comments": "removeComments", // 微博详情页评论区相关内容
  "/2/container/get_item": "containerHandler", // 列表相关
  "/2/messageflow": "removeMsgAd", // 私信推广
  "/2/page?": "removePage", // 超话签到的按钮 /2/page/button 加?区别
  "/2/profile/container_timeline": "userHandler", // 用户主页
  "/2/profile/me": "removeHome", // 个人页模块
  "/2/search/container_discover": "removeSearch", // 搜索 tab 信息流
  "/2/search/container_timeline": "removeSearch", // 搜索 tab 信息流
  "/2/search/finder": "removeSearchMain",
  "/2/statuses/container_timeline": "removeMain", // 新版主页广告
  "/2/statuses/container_timeline_topic": "removeTopic", // 超话 信息流
  "/2/statuses/unread_topic_timeline": "topicHandler", // 超话 tab
  "/2/statuses/video_mixtimeline": "nextVideoHandler", // 取消自动播放下一个视频
  "/2/statuses/extend": "itemExtendHandler", // 微博详情页
  "/2/video/tiny_stream_video_list": "nextVideoHandler", // 取消自动播放下一个视频
  "/2/video/remind_info": "removeVideoRemind", // 超话 tab 菜单上的假通知
  "/2/!/huati/discovery_home_bottom_channels": "removeTopicTab", // 超话 tab 顶部广场
  "/2/!/live/media_homelist": "removeMediaHomelist" // 首页顶部直播
};

function getModifyMethod(url) {
  for (const s of modifyCardsUrls) {
    if (url.indexOf(s) !== -1) return "removeCards";
  }
  for (const s of modifyStatusesUrls) {
    if (url.indexOf(s) !== -1) return "removeTimeLine";
  }
  for (const [path, method] of Object.entries(otherUrls)) {
    if (url.indexOf(path) !== -1) return method;
  }
  return null;
}

function isAd(data) {
  if (!data) return false;
  if (data.mblogtypename === "广告" || data.mblogtypename === "热推") {
    return true;
  }
  if (data.promotion && data.promotion.type === "ad") return true;
  if (data.common_struct && data.common_struct[0]?.actionlog?.source?.includes("ad")) return true;
  return false;
}

function removeCards(data) {
  if (!data.cards) return data;
  let newCards = [];
  for (const card of data.cards) {
    let cardGroup = card.card_group;
    if (cardGroup && cardGroup.length > 0) {
      let newGroup = [];
      for (const group of cardGroup) {
        let cardType = group.card_type;
        if (cardType !== 118) newGroup.push(group);
      }
      card.card_group = newGroup;
      newCards.push(card);
    } else {
      let cardType = card.card_type;
      if ([9, 165].indexOf(cardType) !== -1) {
        if (!isAd(card.mblog)) newCards.push(card);
      } else {
        newCards.push(card);
      }
    }
  }
  data.cards = newCards;
}

function lvZhouHandler(data) {
  if (!mainConfig.removeLvZhou) return data;
  if (!data) return data;
  let struct = data.common_struct;
  if (!struct) return data;
  let newStruct = [];
  for (const s of struct) {
    if (s.name !== "绿洲") newStruct.push(s);
  }
  data.common_struct = newStruct;
}

// 屏蔽用户
function isBlock(data) {
  let blockIds = mainConfig.blockIds || [];
  if (blockIds.length === 0) {
    return false;
  }
  let uid = data.user.id;
  for (const blockId of blockIds) {
    if (blockId == uid) {
      return true;
    }
  }
  return false;
}

function removeTimeLine(data) {
  for (const s of ["ad", "advertises", "trends", "headers"]) {
    if (data[s]) delete data[s];
  }
  if (!data.statuses) return data;
  let newStatuses = [];
  for (const s of data.statuses) {
    if (!isAd(s)) {
      lvZhouHandler(s);
      if (s?.common_struct) delete s.common_struct;
      if (!isBlock(s)) {
        if (s.category !== "group") newStatuses.push(s);
      }
    }
  }
  data.statuses = newStatuses;
}

// 移除tab1签到
function removeCheckin(data) {
  data.show = 0;
}

// 评论区相关和推荐内容
function removeComments(data) {
  let delType = ["广告"];
  if (mainConfig.removeRelateItem) delType.push("相关内容");
  if (mainConfig.removeRecommendItem) delType.push(...["推荐", "热推"]);
  let items = data.datas || [];
  if (items.length === 0) return data;
  let newItems = [];
  for (let item of items) {
    let adType = item.adType || "";
    if (delType.indexOf(adType) === -1 && item.type !== 6) {
      newItems.push(item);
    }
  }
  data.datas = newItems;
}

// 处理感兴趣的超话和超话里的好友
function containerHandler(data) {
  if (mainConfig.removeInterestFriendInTopic) {
    if (data.card_type_name === "超话里的好友") {
      data.card_group = [];
    }
  }
  if (mainConfig.removeInterestTopic && data.itemid) {
    if (data.itemid.indexOf("infeed_may_interest_in") !== -1) {
      data.card_group = [];
    } else if (data.itemid.indexOf("infeed_friends_recommend") !== -1) {
      data.card_group = [];
    }
  }
}

function removeMsgAd(data) {
  if (!data.messages) return data;
  let newMsgs = [];
  for (let msg of data.messages) {
    if (msg.msg_card?.ad_tag) continue;
    newMsgs.push(msg);
  }
  data.messages = newMsgs;
  return data;
}

// 删除热搜列表置顶项目,删除推广项目
function removePage(data) {
  removeCards(data);
  if (mainConfig.removePinedTrending && data.cards && data.cards.length > 0) {
    if (data.cards[0].card_group) {
      data.cards[0].card_group = data.cards[0].card_group.filter((c) =>
        !(
          c?.actionlog?.ext?.includes("ads_word") ||
          c?.itemid?.includes("t:51") ||
          c?.itemid?.includes("ads_word")
        )
      );
    }
  }
  return data;
}

// 可能感兴趣的人
function userHandler(data) {
  data = removeMain(data);
  if (!mainConfig.removeInterestUser) return data;
  if (!data.items) return data;
  let newItems = [];
  for (let item of data.items) {
    let isAdd = true;
    if (item.category === "group") {
      if (item.items[0]["data"]["desc"] === "可能感兴趣的人") isAdd = false;
    }
    if (isAdd) {
      if (item.data?.common_struct) {
        delete item.data.common_struct;
      }
      newItems.push(item);
    }
  }
  data.items = newItems;
  return data;
}

function removeHomeVip(data) {
  if (!data.header) return data;
  if (data.header.vipView) {
    data.header.vipView = null;
  }
  if (data.header?.vipIcon) {
    delete data.header.vipIcon;
  }
  return data;
}

function updateFollowOrder(item) {
  for (let d of item.items) {
    if (d.itemId === "mainnums_friends") {
      let s = d.click.modules[0].scheme;
      d.click.modules[0].scheme = s.replace("231093_-_selfrecomm", "231093_-_selffollowed");
      return item;
    }
  }
}

function removeTopMine(data) {
  if (!data) return data;
  if (data.items) {
    data.items = data.items.filter((i) => {
      return (
        i.itemId === "100505_-_album" || // 我的相册
        i.itemId === "100505_-_like" || // 赞/收藏
        i.itemId === "100505_-_watchhistory" || // 浏览记录
        i.itemId === "100505_-_draft" // 草稿箱
        // i.itemId === "100505_-_pay" || // 我的钱包
        // i.itemId === "100505_-_ordercenter" || // 我的订单
        // i.itemId === "100505_-_productcenter" || // 创作中心
        // i.itemId === "100505_-_promote" || // 广告中心
      );
    });
  }
  return data;
}

function removeHome(data) {
  if (!data.items) return data;
  let newItems = [];
  for (let item of data.items) {
    let itemId = item.itemId;
    if (itemId === "profileme_mine") {
      if (mainConfig.removeHomeVip) item = removeHomeVip(item);
      updateFollowOrder(item);
      newItems.push(item);
    } else if (itemId === "100505_-_top8") {
      removeTopMine(item);
      newItems.push(item);
    } else if (itemId === "100505_-_manage") {
      if (item.style) delete item.style;
      if (item.images) delete item.images;
      newItems.push(item);
    } else if (
      [
        "mine_attent_title",
        "100505_-_meattent_pic",
        "100505_-_newusertask",
        "100505_-_vipkaitong",
        "100505_-_hongbao2022",
        "100505_-_adphoto",
        "100505_-_advideo",
        "2022pk_game_tonglan"
      ].indexOf(itemId) !== -1
    ) {
      continue;
    } else if (itemId.match(/100505_-_meattent_-_\d+/)) {
      continue;
    } else {
      newItems.push(item);
    }
  }
  data.items = newItems;
  return data;
}

function checkSearchWindow(item) {
  if (!mainConfig.removeSearchWindow) return false;
  if (item.category !== "card") return false;
  return (
    item.data?.card_type === 19 ||
    item.data?.card_type === 208 ||
    item.data?.card_type === 217 ||
    item.data?.card_type === 1005 ||
    item.data?.itemid === "finder_window" ||
    item.data?.itemid === "more_frame" ||
    item.data?.mblog?.page_info?.actionlog?.source?.includes("ad")
  );
}

// 发现页
function removeSearch(data) {
  if (!data.items) return data;
  let newItems = [];
  for (let item of data.items) {
    if (item.category === "feed") {
      if (!isAd(item.data)) newItems.push(item);
    } else {
      if (!checkSearchWindow(item)) {
        if (item?.itemId) continue;
        newItems.push(item);
      }
    }
  }
  data.items = newItems;
  // 去除搜索框填充词
  if (data.loadedInfo) {
    data.loadedInfo.searchBarContent = {};
    if (data.loadedInfo.headerBack) {
      data.loadedInfo.headerBack.channelStyleMap = {};
    }
  }
  return data;
}

function removeSearchMain(data) {
  let channels = data.channelInfo.channels;
  if (!channels) return data;
  for (let channel of channels) {
    let payload = channel.payload;
    if (!payload) continue;
    removeSearch(payload);
  }
  return data;
}

// 新版主页广告
function removeMain(data) {
  if (!data.items) return data;
  if (data.loadedInfo && data.loadedInfo.headers) {
    delete data.loadedInfo.headers;
  }
  let newItems = [];
  for (let item of data.items) {
    if (!isAd(item.data)) {
      if (item.category !== "group") newItems.push(item);
    }
  }
  data.items = newItems;
  return data;
}

function removeTopic(data) {
  if (!data.items) return data;
  if (data.loadedInfo && data.loadedInfo.headers) {
    delete data.loadedInfo.headers;
  }
  let items = data.items;
  let newItems = [];
  for (let item of items) {
    if (item.category === "feed") {
      if (!isAd(item.data)) newItems.push(item);
    } else if (item.category === "group") {
      if (item.items.length > 0 && item.items[0].data?.itemid?.includes("search_input")) {
        item.items = item.items.filter((e) =>
          e?.data?.itemid?.includes("mine_topics") ||
          e?.data?.itemid?.includes("search_input")
        );
        item.items[0].data.hotwords = [{word: "搜索超话", tip: ""}];
        newItems.push(item);
      } else {
        if (item.items.length > 0 && item.items[0].data?.itemid?.includes("top_title")) continue;
        newItems.push(item);
      }
    } else if (item.category === "card") continue;
  }
  data.items = newItems;
  return data;
}

function topicHandler(data) {
  const cards = data.cards;
  if (!cards) return data;
  if (!mainConfig.removeUnfollowTopic && !mainConfig.removeUnusedPart) {
    return data;
  }
  let newCards = [];
  for (let c of cards) {
    let addFlag = true;
    if (c.mblog) {
      let btns = c.mblog.buttons;
      if (mainConfig.removeUnfollowTopic && btns) {
        if (btns[0].type === "follow") addFlag = false;
      }
    } else {
      if (!mainConfig.removeUnusedPart) continue;
      if (c.itemid === "bottom_mix_activity") {
        addFlag = false;
      } else if (c?.top?.title === "正在活跃") {
        addFlag = false;
      } else if (c.card_type === 200 && c.group) {
        addFlag = false;
      } else {
        let cGroup = c.card_group;
        if (!cGroup) continue;
        let cGroup0 = cGroup[0];
        if (["guess_like_title", "cats_top_title", "chaohua_home_readpost_samecity_title"].indexOf(cGroup0.itemid) !== -1) {
          addFlag = false;
        } else if (cGroup.length > 1) {
          let newCardGroup = [];
          for (let cg of cGroup) {
            if (["chaohua_discovery_banner_1", "bottom_mix_activity"].indexOf(cg.itemid) === -1) {
              newCardGroup.push(cg);
            }
          }
          c.card_group = newCardGroup;
        }
      }
    }
    if (addFlag) newCards.push(c);
  }
  data.cards = newCards;
  return data;
}

function nextVideoHandler(data) {
  if (mainConfig.removeNextVideo) {
    data.statuses = [];
    data.tab_list = [];
  }
}

// 微博详情页
function itemExtendHandler(data) {
  if (mainConfig.removeRelate || mainConfig.removeGood) {
    if (data.trend && data.trend.titles) {
      let title = data.trend.titles.title;
      if (mainConfig.removeRelate && title === "相关推荐") {
        delete data.trend;
      } else if (mainConfig.removeGood && title === "博主好物种草") {
        delete data.trend;
      }
    }
  }
  if (mainConfig.removeFollow) {
    if (data.follow_data) data.follow_data = null;
  }
  if (mainConfig.removeRewardItem) {
    if (data.reward_info) data.reward_info = null;
  }
  // 删除拓展卡片
  if (mainConfig.removeExtendInfo) {
    if (data?.extend_info) data.extend_info = {};
  }
  // 删除超话新帖和新用户通知
  if (data.page_alerts) data.page_alerts = null;
  // 广告 暂时判断逻辑根据图片  https://h5.sinaimg.cn/upload/1007/25/2018/05/03/timeline_icon_ad_delete.png
  try {
    let picUrl = data.trend.extra_struct.extBtnInfo.btn_picurl;
    if (picUrl.indexOf("timeline_icon_ad_delete") !== -1) delete data.trend;
  } catch (error) {}
  if (mainConfig.modifyMenus && data.custom_action_list) {
    let newActions = [];
    for (const item of data.custom_action_list) {
      let _t = item.type;
      let add = itemMenusConfig[_t];
      if (add === undefined) {
        newActions.push(item);
      } else if (_t === "mblog_menus_copy_url") {
        newActions.unshift(item);
      } else if (add) {
        newActions.push(item);
      }
    }
    data.custom_action_list = newActions;
  }
}

// 移除tab2的假通知
function removeVideoRemind(data) {
  data.bubble_dismiss_time = 0;
  data.exist_remind = false;
  data.image_dismiss_time = 0;
  data.image = "";
  data.tag_image_english = "";
  data.tag_image_english_dark = "";
  data.tag_image_normal = "";
  data.tag_image_normal_dark = "";
}

// 移除话题 tab 顶部广场
function removeTopicTab(data) {
  if (!mainConfig.removeUnusedPart) return data;
  let clist = data.channelInfo.channel_list;
  if (!clist) return data;
  let newList = [];
  for (let tab of clist) {
    if (tab.title !== "广场") newList.push(tab);
  }
  data.channelInfo.channel_list = newList;
  return data;
}

// 移除首页顶部直播
function removeMediaHomelist(data) {
  if (mainConfig.removeLiveMedia) {
    data.data = [];
  }
}

var url = $request.url;
var body = $response.body;
let method = getModifyMethod(url);

if (method) {
  var func = eval(method);
  let data = JSON.parse(body);
  new func(data);
  body = JSON.stringify(data);
}

$done({ body });

