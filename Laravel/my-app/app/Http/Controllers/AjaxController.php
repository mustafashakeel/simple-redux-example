<?php

namespace App\Http\Controllers;
// use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class AjaxController extends Controller
{
    //
     public function index(){
      $msg = "This is a simple message.";
      return response()->json(array('msg'=> $msg), 200);
   }
}
