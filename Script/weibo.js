// 2023-02-10 19:40

if (!$response.body) $done({});
const url = $request.url;
let body = $response.body;

// 屏蔽用户id获取方法
// 进入用户主页 选择复制链接 得到类似 `https://weibo.com/u/xxx` 的文本 xxx即为用户id 多个id用英文逗号 `,` 分开
const blockIds = [];

// 微博详情页菜单配置
const itemMenusConfig = {
  creatortypeask: false, // 转发任务
  mblog_menus_apeal: true, // 申诉
  mblog_menus_avatar_widget: false, // 用此头像挂件
  mblog_menus_bullet_shield: true, // 屏蔽弹幕
  mblog_menus_card_bg: false, // 用此卡片背景
  mblog_menus_comment_manager: true, // 评论管理
  mblog_menus_copy_url: true, // 复制链接
  mblog_menus_custom: false, // 寄微博
  mblog_menus_delete: true, // 删除
  mblog_menus_edit: true, // 编辑
  mblog_menus_edit_history: true, // 编辑记录
  mblog_menus_edit_video: true, // 编辑视频
  mblog_menus_favorite: true, // 收藏
  mblog_menus_follow: true, // 关注
  mblog_menus_home: false, // 返回首页
  mblog_menus_long_picture: true, // 生成长图
  mblog_menus_modify_visible: true, // 设置分享范围
  mblog_menus_novelty: false, // 新鲜事投稿
  mblog_menus_open_reward: false, // 赞赏
  mblog_menus_popularize: false,
  mblog_menus_promote: false, // 推广
  mblog_menus_report: true, // 投诉
  mblog_menus_shield: true, // 屏蔽
  mblog_menus_sticking: true, // 置顶
  mblog_menus_video_feedback: false, // 播放反馈
  mblog_menus_video_later: false // 可能是稍后再看
};

if (url.includes("/interface/sdk/sdkad.php")) {
  // 开屏广告
  let obj = JSON.parse(body.substring(0, body.length - 2));
  if (obj.needlocation) {
    obj.needlocation = false;
  }
  if (obj.show_push_splash_ad) {
    obj.show_push_splash_ad = false;
  }
  if (obj.background_delay_display_time) {
    obj.background_delay_display_time = 31536000; // 60 * 60 * 24 * 365 = 31536000
  }
  if (obj.lastAdShow_delay_display_time) {
    obj.lastAdShow_delay_display_time = 31536000;
  }
  if (obj.realtime_ad_video_stall_time) {
    obj.realtime_ad_video_stall_time = 0;
  }
  if (obj.realtime_ad_timeout_duration) {
    obj.realtime_ad_timeout_duration = 0;
  }
  if (obj.ads) {
    for (let item of obj.ads) {
      item.displaytime = 0;
      item.displayintervel = 31536000;
      item.allowdaydisplaynum = 0;
      item.begintime = "2040-01-01 00:00:00";
      item.endtime = "2040-01-01 23:59:59";
    }
  }
  body = JSON.stringify(obj) + "OK";
  $done({ body });
} else {
  let obj = JSON.parse(body);
  if (url.includes("/2/checkin/show")) {
    // 首页签到
    if (obj.show) {
      obj.show = 0;
    }
  } else if (url.includes("/2/client/publisher_list")) {
    // 首页右上角按钮
    if (obj.elements) {
      obj.elements = obj.elements.filter(
        (a) =>
          a.app_name === "写微博" ||
          a.app_name === "图片" ||
          a.app_name === "视频"
      );
    }
  } else if (url.includes("/2/comments/build_comments")) {
    // 评论区
    let delType = ["广告"];
    delType.push("相关内容");
    delType.push(...["推荐", "热推"]);
    if (obj.datas) {
      let items = obj.datas || [];
      if (items.length > 0) {
        let newItems = [];
        for (let item of items) {
          // 移除超话社区,头像挂件,勋章,评论气泡
          if (item.data.user) {
            if (item.data.user.name === "超话社区") {
              continue;
            }
            removeAvatar(item.data.user);
          }
          // 移除评论气泡
          if (item.data?.comment_bubble) {
            delete item.data.comment_bubble;
          }
          let adType = item.adType || "";
          // 移除评论区推广
          if (delType.indexOf(adType) === -1) {
            // 移除过滤提示
            if (item.type === 6) {
              continue;
            } else {
              newItems.push(item);
            }
          }
        }
        obj.datas = newItems;
      }
    } else if (obj.root_comments) {
      let items = obj.root_comments || [];
      if (items.length > 0) {
        let newItems = [];
        for (let item of items) {
          // 移除头像挂件、勋章、评论气泡
          if (item?.user) {
            removeAvatar(item.user);
          }
          if (item?.comment_bubble) {
            delete item.comment_bubble;
          }
          let adType = item.adType || "";
          // 移除评论区推广
          if (delType.indexOf(adType) === -1) {
            // 移除过滤提示
            if (item.type === 6) {
              continue;
            } else {
              newItems.push(item);
            }
          }
        }
        obj.root_comments = newItems;
      }
    }
  } else if (url.includes("/2/messageflow/notice")) {
    // 消息动态页
    if (obj.messages) {
      let newMsgs = [];
      for (let msg of obj.messages) {
        if (msg.msg_card?.ad_tag) {
          continue;
        } else {
          newMsgs.push(msg);
        }
      }
      obj.messages = newMsgs;
    }
  } else if (url.includes("/2/page")) {
    // 搜索页列表,超话
    if (obj.cards?.length > 0) {
      if (obj.cards[0].card_group) {
        obj.cards[0].card_group = obj.cards[0].card_group.filter(
          (c) =>
            !(
              c?.actionlog?.ext?.includes("ads_word") ||
              c?.itemid?.includes("t:51") ||
              c?.itemid?.includes("ads_word")
            )
        );
      } else if (obj.cards) {
        obj.cards = obj.cards.filter(
          (i) =>
            !(
              i.itemid.includes("feed_-_invite") || // 超话里的好友
              i.itemid.includes("infeed_friends_recommend") || // 好友关注
              i.itemid.includes("infeed_may_interest_in") || // 你可能感兴趣的超话
              i.itemid.includes("infeed_pagemanual3") || // 手动区域3
              i.itemid.includes("infeed_weibo_mall") || // 微博小店
              i?.mblog?.mblogtypename === "广告"
            )
        );
      } else if (obj.card_group) {
        obj.card_group = obj.card_group.filter(
          (i) => !(i?.desc === "你可能感兴趣的超话")
        );
      }
    }
  } else if (url.includes("/2/profile/container_timeline")) {
    // 个人主页信息流
    if (obj.items) {
      let newItems = [];
      for (let item of obj.items) {
        if (item.category === "card") {
          if (item.data.right_filter) {
            newItems.push(item);
          } else {
            continue;
          }
        } else if (item.category === "feed") {
          if (!isAd(item.data)) {
            newItems.push(item);
          } else {
            continue;
          }
        }
      }
      obj.items = newItems;
    }
  } else if (url.includes("/2/profile/me")) {
    // 我的页面
    if (obj.vipHeaderBgImage) {
      delete obj.vipHeaderBgImage;
    }
    if (obj.items) {
      let newItems = [];
      for (let item of obj.items) {
        let itemId = item.itemId;
        if (itemId === "profileme_mine") {
          if (item.header) {
            delete item.header.vipView;
            delete item.header.vipCenter;
            delete item.header.vipIcon;
          }
          for (let d of item.items) {
            if (d.itemId === "mainnums_friends") {
              let s = d.click.modules[0].scheme;
              d.click.modules[0].scheme = s.replace(
                "231093_-_selfrecomm",
                "231093_-_selffollowed"
              );
            }
          }
          newItems.push(item);
        } else if (itemId === "100505_-_top8") {
          if (item.items) {
            item.items = item.items.filter(
              (i) =>
                i.itemId === "100505_-_album" || // 我的相册
                i.itemId === "100505_-_like" || // 赞/收藏
                i.itemId === "100505_-_watchhistory" || // 浏览记录
                i.itemId === "100505_-_draft" // 草稿箱
              // i.itemId === "100505_-_pay" || // 我的钱包
              // i.itemId === "100505_-_ordercenter" || // 我的订单
              // i.itemId === "100505_-_productcenter" || // 创作中心
              // i.itemId === "100505_-_promote" || // 广告中心
            );
          }
          newItems.push(item);
        } else if (item.category === "mine") {
          if (itemId === "100505_-_manage") {
            if (item.style) {
              delete item.style;
            }
            // 移除分隔符的点点点
            if (item.images) {
              delete item.images;
            }
            newItems.push(item);
          } else if (itemId === "100505_-_manage2") {
            // 移除面板样式
            if (item.footer) {
              delete item.footer;
            }
            // 移除框内推广
            if (item.body) {
              delete item.body;
            }
            newItems.push(item);
          } else {
            // 其他项目全部移除
            continue;
          }
        } else {
          // 其他项目全部移除
          continue;
        }
      }
      obj.items = newItems;
    }
  } else if (url.includes("/2/push/active")) {
    // 首页右上角红包图标
    if (obj?.feed_redpacket) {
      obj.feed_redpacket.starttime = "2208960000";
      obj.feed_redpacket.interval = "31536000";
      obj.feed_redpacket.endtime = "2209046399";
    }
  } else if (url.includes("/2/search/")) {
    // 搜索页信息流
    if (url.includes("container_timeline")) {
      if (obj.items) {
        let newItems = [];
        for (let item of obj.items) {
          if (item.category === "feed") {
            if (!isAd(item.data)) {
              newItems.push(item);
            }
          } else {
            if (!checkSearchWindow(item)) {
              newItems.push(item);
            }
          }
          obj.items = newItems;
        }
      }
      if (obj?.loadedInfo) {
        delete obj?.loadedInfo;
      }
    } else if (url.includes("finder")) {
      let channels = obj.channelInfo.channels;
      if (channels) {
        for (let channel of channels) {
          let payload = channel.payload;
          if (payload) {
            if (payload.loadedInfo) {
              // 去除搜索框填充词
              if (payload.loadedInfo.searchBarContent) {
                delete payload.loadedInfo.searchBarContent;
              }
              // 去除搜索背景图片
              if (payload.loadedInfo.headerBack?.channelStyleMap) {
                delete payload.loadedInfo.headerBack.channelStyleMap;
              }
            }
            if (payload.items) {
              let newItems = [];
              for (let item of payload.items) {
                if (item.category === "feed") {
                  if (!isAd(item.data)) {
                    newItems.push(item);
                  }
                } else {
                  if (!checkSearchWindow(item)) {
                    newItems.push(item);
                  }
                }
              }
              payload.items = newItems;
            }
          }
        }
      }
    }
  } else if (url.includes("/2/cardlist") || url.includes("/2/searchall")) {
    if (obj.cards) {
      let newCards = [];
      for (const card of obj.cards) {
        let cardGroup = card.card_group;
        if (cardGroup?.length > 0) {
          let newGroup = [];
          for (const group of cardGroup) {
            let cardType = group.card_type;
            if (cardType !== 118) {
              if (!isAd(group.mblog)) {
                newGroup.push(group);
              }
            }
          }
          card.card_group = newGroup;
          newCards.push(card);
        } else {
          let cardType = card.card_type;
          // 9 广告
          // 58 猜你想搜偏好设置
          // 165 广告
          if ([9, 17, 58, 165, 180, 1007].indexOf(cardType) !== -1) {
            continue;
          } else {
            if (!isAd(card.mblog)) {
              newCards.push(card);
            }
          }
        }
      }
      obj.cards = newCards;
    }
  } else if (
    url.includes("/2/statuses/container_timeline?") ||
    url.includes("/2/statuses/container_timeline_unread")
  ) {
    // 首页关注tab信息流
    if (obj.loadedInfo?.headers) {
      delete obj.loadedInfo.headers;
    }
    if (obj.items) {
      let newItems = [];
      for (let item of obj.items) {
        if (!isAd(item.data)) {
          if (item.category === "feed") {
            newItems.push(item);
          } else {
            // 移除所有的推广
            continue;
          }
        }
      }
      obj.items = newItems;
    }
  } else if (url.includes("/2/statuses/container_timeline_topic")) {
    // 超话信息流
    if (obj.items) {
      let newItems = [];
      for (let item of obj.items) {
        if (item?.items) {
          delete item.items;
        }
        if (item.category === "feed") {
          newItems.push(item);
        } else {
          // 移除所有的推广
          continue;
        }
      }
      obj.items = newItems;
    }
  } else if (url.includes("/2/statuses/unread_hot_timeline")) {
    // 首页推荐tab信息流
    for (let s of ["ad", "advertises", "trends", "headers"]) {
      if (obj[s]) {
        delete obj[s];
      }
    }
    if (obj.statuses) {
      let newStatuses = [];
      for (let s of obj.statuses) {
        if (!isAd(s)) {
          if (!isBlock(s)) {
            // 移除拓展信息,绿洲
            if (s?.common_struct) {
              delete s.common_struct;
            }
            newStatuses.push(s);
          }
        }
      }
      obj.statuses = newStatuses;
    }
  } else if (url.includes("/2/statuses/extend")) {
    // 微博详情页
    if (obj?.trend?.extra_struct?.extBtnInfo?.btn_picurl?.includes("ad")) {
      delete obj.trend;
    }
    if (obj.trend?.titles) {
      let title = obj.trend.titles.title;
      if (["博主好物种草", "相关推荐"].indexOf(title) !== -1) {
        delete obj.trend;
      }
    }
    // 关注提醒
    if (obj?.follow_data) {
      delete obj.follow_data;
    }
    // 公益赞赏
    if (obj?.reward_info) {
      delete obj.reward_info;
    }
    // 移除拓展卡片
    if (obj?.extend_info) {
      delete obj.extend_info;
    }
    // 移除超话新帖和新用户通知
    if (obj?.page_alerts) {
      delete obj.page_alerts;
    }
    if (obj.custom_action_list) {
      let newActions = [];
      for (let item of obj.custom_action_list) {
        let type = item.type;
        let add = itemMenusConfig[type];
        if (type === "mblog_menus_copy_url") {
          newActions.unshift(item);
        } else if (add) {
          newActions.push(item);
        }
      }
      obj.custom_action_list = newActions;
    }
  } else if (url.includes("/2/video/tiny_stream_video_list")) {
    if (obj.statuses) {
      obj.statuses = obj.statuses.filter((m) => !(m.mblogtypename === "广告"));
    }
  } else if (url.includes("/2/!/huati/discovery_home_bottom_channels")) {
    // 超话左上角,右上角图标
    if (obj.button_configs) {
      delete obj.button_configs;
    }
    // 广场页
    if (obj.channelInfo.channel_list) {
      obj.channelInfo.channel_list = obj.channelInfo.channel_list.filter(
        (t) => t.title !== "广场"
      );
    }
  } else if (url.includes("/v2/strategy/ad")) {
    // 开屏广告
    obj.end = "2040-01-01 23:59:59";
    obj.start = "2040-01-01 00:00:00";
  } else if (url.includes("/wbapplua/wbpullad.lua")) {
    // 开屏广告
    if (obj.cached_ad.ads) {
      for (let item of obj.cached_ad.ads) {
        item.start_date = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
        item.show_count = 0;
        item.duration = 0; // 60 * 60 * 24 * 365 = 31536000
        item.end_date = 2209046399; // Unix 时间戳 2040-01-01 23:59:59
      }
    }
  }
  body = JSON.stringify(obj);
  $done({ body });
}

// 判断信息流
function isAd(data) {
  if (data) {
    if (data.mblogtypename === "广告") {
      return true;
    }
    if (data.mblogtypename === "热推") {
      return true;
    }
    if (data.promotion?.type === "ad") {
      return true;
    }
  }
  return false;
}

// 屏蔽用户id
function isBlock(data) {
  if (blockIds?.length > 0) {
    let uid = data.user.id;
    for (let blockId of blockIds) {
      if (blockId == uid) {
        return true;
      }
    }
  }
  return false;
}

// 移除头像挂件,勋章
function removeAvatar(data) {
  if (data) {
    if (data.cardid) {
      delete data.cardid;
    }
    if (data.avatar_extend_info) {
      delete avatar_extend_info;
    }
    if (data.icons) {
      delete data.icons;
    }
    if (data.avatargj_id) {
      delete data.avatargj_id;
    }
  }
  return data;
}

function checkSearchWindow(item) {
  if (item.category) {
    // 搜索页中间的热议话题、热门人物
    if (item.category === "group") {
      return true;
    } else {
      if (item.category !== "card") {
        return false;
      }
    }
  }
  if (
    item.data?.card_type === 19 || // 找人 热议 本地
    item.data?.card_type === 118 || // finder_window 横版大图
    item.data?.card_type === 208 || // 实况热聊
    item.data?.card_type === 217 ||
    item.data?.card_type === 1005 ||
    item.data?.itemid === "more_frame" ||
    item.data?.mblog?.page_info?.actionlog?.source?.includes("ad")
  ) {
    return true;
  }
  return false;
}
