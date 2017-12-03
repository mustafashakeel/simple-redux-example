<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
use Illuminate\Support\Facades\Mail;
Route::get('/', function () {
   $data = [
	'title'=>'Laravel Emails ',
	'content'=>'Laravel Email Messaging is Awesome'
];

Mail::send('emails.test',$data, function($message){
	$message->to('mustafa.shakeel@gmail.com','Mushoo')->subject('Laravel Email Works Great');
});

});


// Route::get('sendbasicemail','MailController@basic_email');
// Route::get('sendhtmlemail','MailController@html_email');
// Route::get('sendattachmentemail','MailController@attachment_email');