<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Message;

class MessagesController extends Controller
{
    public function submit(Request $request){
        // return 123
        // return $request->input('name');
        $this->validate($request,[
            'name'=>'required',
            'email'=>'required',
            'message'=>'required'
        ]);
        // return 'SUCCESS';

        // Create a new Messege using Eloquent 
        $message = new Message;
        $message->name = $request->input('name');    
        $message->email = $request->input('email');    
        $message->message = $request->input('message');

        // Save Message 

        $message->save();

        // Redirect
        // return redirect('/');
        return redirect('/')->with('success','Message Sent');
    }
    // Get Messages from the Database 

    public function getMessages(){
        // return view('messages');
        $messages = Message::all();
        return view('messages')->with('messages',$messages);
    }
}
