let url = $request.url;
if (!$response.body) {
    console.log(`body为空:${url}`);
    $done({});
}
let body = JSON.parse($response.body);

if (url.includes("mtop.taobao.idlecommerce.splash.ads")) {
    // reject-dict 替换为安全写法，保留顶层结构
    body.data = {};
    console.log("✅ 开屏广告：清空data");
} else if (url.includes("mtop.taobao.idle.item.recommend.tab")) {
    // 标签接口：保留tabList数组，清空tabName（含extra内部的tabName）
    if(body.data?.tabList){
        body.data.tabList.forEach(item=>{
            // 外层标题
            item.tabName = "";
        })
        console.log("✅ tab标签内容清空，数组长度不变");
    }
} else if (url.includes("mtop.taobao.idle.item.recommend.list")) {
    // 推荐商品接口：cardList数组长度不变，cardData直接置空
    if(body.data?.cardList){
        body.data.cardList.forEach(item=>{
            item.cardData = {};
            // 删除广告埋点字段
            delete item.idleAdsTaskId;
        })
        console.log("✅ cardData置空，数组长度不变");
    }
    // hasMore是字符串！必须赋值"false"，不能写false
    if(body.data?.hasMore !== undefined){
        body.data.hasMore = "false";
        console.log("✅ hasMore设置为字符串false");
    }
} else if (url.includes("mtop.taobao.idlehome.home.nextfresh")) {
    // jq: .data.homeTopList |= map(select(.sectionType == "kingkongDo"))
    if(body.data?.homeTopList){
        body.data.homeTopList = body.data.homeTopList.filter(item => item.sectionType === "kingkongDo");
    }
    // jq: .data.sections |= map(select(.data.clickParam.args.cardType as $ct | $ct != "homeMultiBanner" and $ct != "mamaAD"))
    if(body.data?.sections){
        body.data.sections = body.data.sections.filter(item => {
            const ct = item?.data?.clickParam?.args?.cardType;
            return ct !== "homeMultiBanner" && ct !== "mamaAD";
        });
    }
    // jq: .data.sections |= map(select((.template.name|type=="string")and(.template.name=="idlefish_home_new_commodity_card"or(.template.name|contains("fish_home_tags_item_card")))))
    if(body.data?.sections){
        body.data.sections = body.data.sections.filter(item => {
            const name = item?.template?.name;
            if(typeof name !== "string") return false;
            return name === "idlefish_home_new_commodity_card" || name.includes("fish_home_tags_item_card");
        });
    }
    console.log("✅ idlehome.home.nextfresh 首页新鲜流过滤");
} else if (url.includes("mtop.taobao.idlehome.widget.refresh.get")) {
    // jq: .data.homeTopList |= map(select(.sectionType == "kingkongDo"))
    if(body.data?.homeTopList){
        body.data.homeTopList = body.data.homeTopList.filter(item => item.sectionType === "kingkongDo");
    }
    console.log("✅ idlehome.widget.refresh.get");
} else if (url.includes("mtop.taobao.idle.home.whale.modulet")) {
    // jq: .data.container.sections |= map(select(.template.name == "fish_home_miniapp"))
    if(body.data?.container?.sections){
        body.data.container.sections = body.data.container.sections.filter(item => item?.template?.name === "fish_home_miniapp");
    }
    console.log("✅ idle.home.whale.modulet");
} else if (url.includes("mtop.taobao.idle.user.strategy.list")) {
    // reject-dict 安全写法
    body.data = {};
    console.log("✅ idle.user.strategy.list 清空data");
} else if (url.includes("mtop.taobao.idle.fun.follow.feed.list")) {
    // jq: .data.sections|=map(select(.cardType==2001))
    if(body.data?.sections){
        body.data.sections = body.data.sections.filter(item => item.cardType === 2001);
    }
    console.log("✅ idle.fun.follow.feed.list");
} else if (url.includes("mtop.taobao.idlehome.home.community")) {
    // jq: .data.feedsList |= map(select(.template.name == "idlefish_home_new_commodity_card" or .template.name == "idlefish_home_new_content_card"))
    if(body.data?.feedsList){
        body.data.feedsList = body.data.feedsList.filter(item => {
            const name = item?.template?.name;
            return name === "idlefish_home_new_commodity_card" || name === "idlefish_home_new_content_card";
        });
    }
    console.log("✅ idlehome.home.community");
} else if (url.includes("mtop.taobao.idlehome.home.newitem.page")) {
    // jq: .data.sections |= map(select(.data.clickParam.args.cardType as $ct | $ct != "banner" and $ct != "mamaAD"))
    if(body.data?.sections){
        body.data.sections = body.data.sections.filter(item => {
            const ct = item?.data?.clickParam?.args?.cardType;
            return ct !== "banner" && ct !== "mamaAD";
        });
    }
    console.log("✅ idlehome.home.newitem.page");
} else if (url.includes("mtop.taobao.idle.local.near.by.corner.info")) {
    // reject-dict 安全写法
    body.data = {};
    console.log("✅ idle.local.near.by.corner.info 清空data");
} else if (url.includes("mtop.taobao.idle.local.flow.plat.section")) {
    // jq: .data.data.components |= map(select(.data and (.data|type=="object") and .data.template and (.data.template|type=="object") and .data.template.name and (.data.template.name|type=="string") and (.data.template.name|contains("fish_city_kingkong"))))
    if(body.data?.data?.components){
        body.data.data.components = body.data.data.components.filter(item => {
            if(!item?.data || typeof item.data !== "object") return false;
            if(!item.data?.template || typeof item.data.template !== "object") return false;
            const name = item.data.template.name;
            return typeof name === "string" && name.includes("fish_city_kingkong");
        });
    }
    console.log("✅ idle.local.flow.plat.section");
} else if (url.includes("mtop.taobao.idle.local.home.top")) {
    // jq: .data.data.components |= map(select(.key == "fish_home_second_stage_top_cardV3"))
    if(body.data?.data?.components){
        body.data.data.components = body.data.data.components.filter(item => item.key === "fish_home_second_stage_top_cardV3");
    }
    console.log("✅ idle.local.home.top");
} else if (url.includes("mtop.taobao.idle.local.home")) {
    // jq: .data.sections |= map(select((.template.cardEnum != "ads") and (.cardType == "common")))
    if(body.data?.sections){
        body.data.sections = body.data.sections.filter(item => {
            return item?.template?.cardEnum !== "ads" && item.cardType === "common";
        });
    }
    console.log("✅ idle.local.home");
} else if (url.includes("mtop.taobao.idlemtopsearch.search.shade")) {
    // reject-dict 安全写法
    body.data = {};
    console.log("✅ idlemtopsearch.search.shade 清空data");
} else if (url.includes("mtop.taobao.idlehome.home.circle.list")) {
    // jq: .data.circleList[]?.showInfo |= del(.titleImage, .atmosphereImageUrl) | .data.next.headList |= map(select(.bizCode == "main" or .bizCode == "market" or .bizCode == "IDLE_CIRCLE")) | del(.data.next.headList[]?.showInfo.rightTagImage)
    if(body.data?.circleList){
        body.data.circleList.forEach(item=>{
            if(item.showInfo){
                delete item.showInfo.titleImage;
                delete item.showInfo.atmosphereImageUrl;
            }
        });
    }
    if(body.data?.next?.headList){
        body.data.next.headList = body.data.next.headList.filter(item => ["main","market","IDLE_CIRCLE"].includes(item.bizCode));
        body.data.next.headList.forEach(item=>{
            if(item.showInfo?.rightTagImage) delete item.showInfo.rightTagImage;
        });
    }
    console.log("✅ idlehome.home.circle.list");
} else if (url.includes("mtop.taobao.idlehome.magic.home.page.list")) {
    // response-body-json-del data.topList
    if(body.data?.topList) delete body.data.topList;
    console.log("✅ idlehome.magic.home.page.list del topList");
} else if (url.includes("mtop.taobao.idlemtopsearch.search") && url.includes("g-acs")) {
    // jq: .data.resultList |= map(if .data.item.main.exContent.dislikeFeedback.clickParam.args.bizType == "ad" then empty else . end)
    if(body.data?.resultList){
        body.data.resultList = body.data.resultList.filter(item => {
            const bizType = item?.data?.item?.main?.exContent?.dislikeFeedback?.clickParam?.args?.bizType;
            return bizType !== "ad";
        });
    }
    if(body.data?.resultPrefixBar) delete body.data.resultPrefixBar;
    console.log("✅ g-acs search 搜索结果过滤广告");
} else if (url.includes("mtop.taobao.idlemtopsearch.search.discover")) {
    if(body.data?.resultList){
        body.data.resultList = body.data.resultList.filter(item => item.type !== "MarketHotSpot");
    }
    console.log("✅ search.discover");
} else if (url.includes("mtop.taobao.idlemtopsearch.item.search.activate") || url.includes("mtop.taobao.idlemtopsearch.search.activate.tablist")) {
    if(body.data?.cardList){
        body.data.cardList = [];
        console.log("✅ 清空cardList");
    }
    if(body.data?.tabList){
        body.data.tabList = [];
        console.log("✅ 清空tabList");
    }
} else if (url.includes("mtop.idle.user.page.my.adapter")) {
    // 闲鱼我的页面，恢复原jq过滤规则 + 删除模块
    const sections = body?.data?.container?.sections;
    if (Array.isArray(sections)) {
        // 只保留指定模板区块，还原jq过滤
        body.data.container.sections = sections.filter(item => {
            const tplName = item?.template?.name ?? "";
            return /^my_fy[0-9]+_(header|user_info|trade|appraise|tools)$/.test(tplName);
        });
           // 遍历删除多余卡片
        body.data.container.sections.forEach(section => {
            if (section?.item?.recycle) {
                delete section.item.recycle;
                console.log("✅ 删除个人页 recycle回收模块");
            }
            if (section?.item?.card) {
                delete section.item.card;
                console.log("✅ 删除个人页 card神奇鱼塘");
            }
            if (section?.item?.coin) {
                delete section.item.coin;
                console.log("✅ 删除个人页 coin鱼币卡片");
            }
        });
        // 删除ability，放到循环外面
        if(body.data.ability) delete body.data.ability;
    }
} else if (url.includes("mtop.taobao.idle.trade.full.info")) {
    // ========== 新增：订单详情接口过滤 components ==========
    if (body?.data?.components) {
        body.data.components = body.data.components.filter(item => {
            return item?.render === "orderStatusVO" || item?.render === "addressInfoVO" || item?.render === "orderInfoVO";
        });
        console.log("✅ 订单详情：只保留 orderStatusVO addressInfoVO orderInfoVO");
    }
} else if(url.includes("mtop.taobao.idle.item.buy.feeds")){
    // 用户页推荐流，安全清空data
    body.data = {};
    console.log("✅ 清除用户页面推荐卡片");
} else if (url.includes("mtop.taobao.idle.playboy.recommend")) {
    // 消息页面可能感兴趣的人的推荐卡片，安全清空data
    body.data = {};
    console.log("✅ 去除消息页推荐用户卡片");
}

$done({body: JSON.stringify(body)});
