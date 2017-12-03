@extends('layouts.app')
@section('title')

Get Messages from Database 
@endsection


@section('heading')
    <h2>Messages Page</h2>
@endsection

@section('content')
    
    <h2>Contact Form Messages</h2>
   
    @if(count($messages) > 0)
       
        @foreach($messages as $message)
            <ul class="list-group">
                <li class="list-group-item">Name: {{$message->name}}</li>
                <li class="list-group-item">Email: {{$message->email}}</li>
                <li class="list-group-item">Message: {{$message->message}}</li>
            </ul>
            @endforeach
        
    @endif
@endsection