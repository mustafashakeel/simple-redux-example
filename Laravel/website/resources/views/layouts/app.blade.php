<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    <link href="{{ asset('css/app.css')}}" rel="stylesheet">
</head>
<body>
    @include('inc.navbar')
  
  <div class="container"> 
    
<div>@yield('heading')</div>
    
<div>@yield('images')</div>



<div class="col-md-4 col-lg-4" >
    @include('inc.messages')
    @yield('content')</div>
</div>
</body>
</html>



       