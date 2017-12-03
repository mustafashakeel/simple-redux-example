<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Message;

class MessagesController extends Controller
{
    //
    public function submit(Request $request){
    	// return $request->input('name');
$this->validate($request, [
        'name' => 'required',
        'email' => 'required',
        'message' => 'required',

    ]);

	$messages = new Message;

	$messages->name = $request->input('name');
	$messages->email = $request->input('email');
	$messages->message = $request->input('message');
	$messages->save();

	
	return redirect('/')->with('success','Message Sent');
    }
    public function getMessages(){
      $messages = Message::all();

        //return view('messages');

       return view('messages')->with('messages', $messages);
    }
}
