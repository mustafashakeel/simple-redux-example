@extends('layouts.app')
@section('title')

Contact Page
@endsection


@section('heading')
    <h2>Contact Page</h2>
@endsection

@section('content')
{!! Form::open(['url' => 'contact/submit']) !!}
<div class="form-group">
        {{Form::label('name', 'Enter Name')}}
        {{Form::text('name','',['class'=>'form-control','placeholder'=>'John Smith'])}}
    </div>
    <div class="form-group">
        {{Form::label('email', 'E-Mail Address')}}
        {{Form::text('email', '',['class'=>'form-control','placeholder'=>'example@email.com'])}}
    </div>
    <div class="form-group">
        {{Form::label('message', 'Message')}}
        {{Form::textarea('message', '',['class'=>'form-control','placeholder'=>'please write your message'])}}
    </div>
    <div class="form-group">
        {{Form::submit('Submit ',['class'=>'btn btn-primary'])}}
    </div>

{!! Form::close() !!}
@endsection