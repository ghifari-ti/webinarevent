<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Webinar Event</title>
    <style>
        html,
        body,
        #app,
        #app>div {
            height: 100%
        }
    </style>
    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/app.css')}}">
</head>

<body>

    <!-- React root DOM -->
    <div id="app">
    </div>

    <!-- React JS -->
    <script src="{{ mix('js/app.js') }}" defer></script>

</body>

</html>
