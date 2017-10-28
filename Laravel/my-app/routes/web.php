<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Post;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/post','PostsController@index');


// Eloquent ORM 

Route::get('/read',function(){

    $posts = Post::all();
    foreach($posts as $post){
        return $post->content;
    }

});

Route::get('/find',function(){
	$record = Post::find(3)->get();

	return $record;
});

Route::get('/findwhere',function(){
	$post = Post::where('id',2)->orderBy('id','desc')->take(1)->get();
	return $post;
});


Route::get('/basicinsert',function(){

	$post = new Post;

	$post->title = 'Laravel Masters ';
	$post->content = 'This is a LAravel Masters Training Session';
	$post->save();

});


Route::get('/basicupdate',function(){
	$post = Post::find(2);

	$post->title = "This is an Updated Title";
	$post->content = "This is an Updated Content";
	$post->save();
	return $post;
});

// Route::get('/user/{id}/post',function(){
// 	return User;
// });
	
Route::get('ajax',function(){
   return view('ajax');
});
Route::post('/getmsg','AjaxController@index');

Route::get('/form',function(){
	return view('form');
});


Route::get('/insertdata',function(){
    DB::insert('insert into posts(title,content) values(?,?)',['PHP   with Laravel','PHP Laravel is best thing in PHP']);
});


Route::get('/read',function(){
$results = DB::select('select * from posts where id = ?',[1]);

foreach ($results as $post ) {
	return $post->title;
}


});

Route::get('/updaterecords',function(){
	$updated = DB::update('update posts set title = "Update title" where id=?',['1']);

	return $updated;
});
