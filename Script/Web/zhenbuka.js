/* 公众号墨鱼手记 crated by ddgksf2013 on 2022-05-28 */
var body = $response.body.replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/xuandrew/Quantumult-X/master/Script/Web/CSS/zhenbuka.css" type="text/css">').replace(/'159140'/g, "'259140'").replace(/\<div  class=\"item stui-banner__item[\s\S]*html[\s\S]*?\<\/div\>/g, "").replace(/img id="ik\d+"/g, 'img id="ddgksf2013"');
$done({ body });
