/* 公众号墨鱼手记 crated by ddgksf2013 on 2022-05-28 */
var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/xuandrew/Quantumult-X/master/Script/Web/CSS/bdys.css" type="text/css">');
$done({ body });
