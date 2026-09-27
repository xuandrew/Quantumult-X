let url = $request.url;
let method = $request.method;
if (!$response.body) {
    console.log(`$response.body为undefined:${url}`);
    $done({});
}

let body = JSON.parse($response.body);

if (method !== "POST") {
    $notification.post("腾讯新闻App脚本错误", "method错误:", method);
}

if (url.includes("r.inews.qq.com/gw/page/v2/event_detail") {
    removeAdList('event_detail');
} else if (url.includes("r.inews.qq.com/gw/page/v4/event_detail")) {
    // 新增v4版本专题详情，同样过滤widget_list中的ad_list广告
    removeAdList('v4_event_detail');
} else if (url.includes("r.inews.qq.com/gw/page/channel_feed")) {
    removeAdList('channel_feed');
} else if (url.includes("r.inews.qq.com/v1/usercenter/module/get2")) {
    // 个人中心模块接口
    if(body.data?.modules){
        delete body.data.modules;
        console.log("✅ 清理usercenter module");
    }
} else if (url.includes("r.inews.qq.com/gw/page/user_center")) {
    //个人中心 删除cards数组
    if(body.data?.cards){
        delete body.data.cards;
        console.log("✅ 已移除个人中心 cards 数组");
    }
} else {
    let name = "";
    if (url.includes("news.ssp.qq.com/app")) {
        name = '开屏页';
    } else if (url.includes("r.inews.qq.com/getQQNewsUnreadList")) {
        name = '要闻/财经等';
    } else if (url.includes("r.inews.qq.com/news_feed/hot_module_list")) {
        name = '财经精选-更多';
    } else if (url.includes("r.inews.qq.com/gw/event/list")) {
        name = '专题gw/event/list';
    } else if (url.includes("r.inews.qq.com/getTwentyFourHourNews")) {
        name = '热点精选getTwentyFourHourNews';
    } else if (url.includes("r.inews.qq.com/getQQNewsListItems")) {
        name = '热点精选getQQNewsListItems';
    } else if (url.includes("r.inews.qq.com/getTagFeedList")) {
        name = 'getTagFeedList';
    }
    else if (url.includes("r.inews.qq.com/getQQNewsLimitList")) {
        name = '必读';
    }
    else if (url.includes("r.inews.qq.com/getRecommendSubList")) {
        name = '关注';
    }
    else if (url.includes("r.inews.qq.com/getNewsRelateModule")) {
        name = '推送新闻';
    }
    else if (url.includes("r.inews.qq.com/getSimpleVideo")) {
        name = '热点精选';
    }
    else {
        $notification.post('腾讯新闻App脚本错误', "路径匹配错误:", url);
    }
    console.log(name);
    if (!body.adList) {
        console.log('无广告');
    } else {
        body.adList = null;
        console.log('成功');
    }
}

body = JSON.stringify(body);
$done({
    body
});

function removeAdList(name) {
    console.log(`gw/page/${name}`);
    if (body.data.widget_list) {
        body.data.widget_list = body.data.widget_list.filter(item => {
            if (item.widget_type === 'ad_list') {
                console.log('去除ad_list广告');
                return false;
            }
            return true;
        });
    } else {
        console.log($response.body);
        $notification.post('腾讯新闻App脚本错误', name, '无widget_list字段');
    }
}