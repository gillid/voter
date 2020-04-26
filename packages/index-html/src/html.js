export const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <!--META Headers-->
    <meta charset="utf-8">
    <meta name="Copyright" content="Voter">
    <meta name="Distribution" content="Global">
    <meta name="Resource-type" content="Document">

    <!--Mobile Not Optimized-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="MobileOptimized" content="320">
    <meta name="HandheldFriendly" content="true">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <!--META SEO-->
    <title>Voter</title>
    <meta name="Robots" content="noindex, nofollow">
    <meta name="Description" content="Voter">
    <meta name="Keywords" content="Voter">

    <!--Favicon-->
    <link rel="shortcut icon" href="%ASSETS_PATH%/favicon.png">
    <meta name="msapplication-TileColor" content="%COLOR_PRIMARY%">
    <meta name="theme-color" content="%COLOR_PRIMARY%">

    <!--Global styles-->
    <style>
        html, body {
            margin: 0;
            background-color: %COLOR_BG%;
            color: white;
            font-family: sans-serif;
        }
        noscript {
            padding: 20px;
            text-align: center;
        }
        .header {
            text-align: center;
            padding: 20px;
            font-size: 40px;
            font-weight: bold;
            color: %COLOR_BG%;
            text-shadow: 0 0 2px %COLOR_PRIMARY%, 0 0 6px %COLOR_PRIMARY%;
        }
        @media screen and (min-width: 768px) {
            .header {
                font-size: 60px;
                padding: 30px;
            }
        }
    </style>
</head>
<body>
<div id="root">
    <div class="header">✔oter</div>
    <noscript>You need to enable JavaScript to run this app.</noscript>
</div>
<script type="text/javascript" src="%ASSETS_PATH%/main.js"></script>
</body>
</html>
`;
