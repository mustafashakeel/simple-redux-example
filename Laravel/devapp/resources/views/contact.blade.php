@extends('layouts.app');

@section('title')
Contacts

@endsection

@section('heading')
 This is Contact
@endsection


@section('content')

{!! Form::open(['url' => 'contact/submit']) !!}
    
	<div class="formgroup">
		{{Form::label('name', 'Name')}}
		{{Form::text('name', '',['class'=>'form-control','placeholder'=>'John Doe'])}}

	</div>
		<div class="formgroup">
		{{Form::label('email', 'Email')}}
		{{Form::text('email', '',['class'=>'form-control','placeholder'=>'abc@email.com'])}}

	</div>
	<div class="formgroup">
		{{Form::label('message', 'Enter Message')}}
		{{Form::textarea('message', '',['class'=>'form-control','placeholder'=>'Please Enter your Message'])}}

	</div>
	<div>
		  <div>
            {{ Form::submit('Submit Me')}}
        </div>
	</div>
{!! Form::close() !!}

@endsection