@extends('layouts.app')
@section('title')

Home page
@endsection


@section('heading')
    <h2>Home</h2>
@endsection

@section('images')
<img src="{{URL::asset('/images/earth.png')}}" />
@endsection