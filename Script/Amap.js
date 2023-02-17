// 2023-02-15 17:05

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (obj.data) {
  if (url.includes("/faas/amap-navigation/main-page")) {
    // 首页卡片
    if (obj.data.cardList) {
      obj.data.cardList = obj.data.cardList.filter(
        (item) => item.dataKey === "LoginCard"
      );
    }
    if (obj.data.mapBizList) {
      obj.data.mapBizList = [];
    }
  } else if (url.includes("/promotion-web/resource")) {
    // 打车页面
    let item = ["banner", "bubble", "icon", "popup", "tips"];
    if (obj.data) {
      item.forEach((i) => {
        delete obj.data[i];
      });
    }
  } else if (url.includes("/shield/dsp/profile/index/nodefaasv3")) {
    // 我的页面
    if (obj.data.cardList) {
      obj.data.cardList = obj.data.cardList.filter(
        (item) => item.dataKey === "MyOrderCard"
      );
    }
//    if (obj.data.tipData) {
//      delete obj.data.tipData;
//    }
//    if (obj.data.footPrintV2) {
//      delete obj.data.footPrintV2;
//    }
  } else if (url.includes("/shield/frogserver/aocs")) {
    // 首页右上角图层
    if (obj.data.operation_layer) {
      obj.data.operation_layer = {
        status: 1,
        version: "",
        value: ""
      };
    }
    // 首页右上角动图
    if (obj.data.home_business_position_config) {
      obj.data.home_business_position_config = {
        status: 1,
        version: "",
        value: ""
      };
    }
  } else if (url.includes("/shield/search/nearbyrec_smart")) {
    // 附近页面
    if (obj.data.modules) {
      obj.data.modules = obj.data.modules.filter(
        (item) =>
          item === "head" || item === "search_hot_words" || item === "feed_rec"
      );
    }
  } else if (url.includes("/shield/search/poi/detail")) {
    // 景点详情页
    const item = [
      // "normal_nav_bar", // 右上角图标 客服 反馈
      // "base_info",
      // "ggc_entry",
      "common_coupon_bar", // 领券条幅 新客专享 省钱卡
      "scenic_play_guide", // 景区攻略 游玩攻略 交通攻略
      // "scenic_ticket_activity",
      "scenic_filter", // 购票悬浮菜单 可定明日 随时退
      // "scenic_ticket",
      "scenic_coupon", // 优惠券过期提示
      "movie_info", // 优惠购票 景点宣传片
      // "evaluate", // 高德出行评分
      "reviews", // 用户评价
      // "packageShelf",
      // "smallOrListBizRec",
      "smallListBizRec", // 周边热门酒店
      // "multi_page_anchor", // 二级导航菜单 门票 评论 推荐
      "bigListBizRec", // 周边景点推荐 三张景点大图
      "nearbyRecommendModule", // 周边推荐
      "scenic_recommend", // 景点建议
      // "parentBizRec",
      // "surround_facility",
      "scenic_mustplay", // 必游景点 四张景点大图
      "scenic_route_intelligent", // 推荐游玩线路
      "scenic_lifeservices", // 吃住购娱 餐厅 购物
      // "scenic_service",
      // "scenic_parking",
      // "scenic_ski", // 滑雪攻略 雪道数量 设施及服务
      // "video",
      "new_operation_banner", // 精选活动 高德的推广
      "portal_entrance", // 高德旅游版块 引流到旅游频道
      "scenic_voice", // 语音讲解 付费的项目
      "official_account", // 其他平台官方账号
      // "scenic_knowledge",
      // "scenic_helper", // 景区助手 开放时间 旺季 淡季
      // "human_traffic", // 人流量情况 有统计图
      // "scenic_guide",
      // "scenic_route",
      // "scenic_story",
      // "contributor",
      "collector_guide", // 游玩的图文指南
      "operation_banner", // 横版图片推广
      // "question_answer_card", // 问问 地点附近的热门问题
      "check_in", // 足迹打卡
      "feedback" // 问题反馈
    ];
    if (obj.data.modules) {
      item.forEach((i) => {
        delete obj.data.modules[i];
      });
    }
  } else if (url.includes("/valueadded/alimama/splash_screen")) {
    // 开屏广告
    if (obj.data.ad) {
      for (let item of obj.data.ad) {
        item.set.setting.display_time = 0;
        item.creative[0].start_time = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
        item.creative[0].end_time = 2209046399; // Unix 时间戳 2040-01-01 23:59:59
      }
    }
  }
}

$done({ body: JSON.stringify(obj) });