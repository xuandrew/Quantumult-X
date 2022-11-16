var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/xuandrew/Quantumult-X/master/Script/Web/CSS/cupbox.css" type="text/css">');
$done({ body });
