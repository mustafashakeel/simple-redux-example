var Client = require('node-rest-client').Client;
var client = new Client();

var flickrapi = "https://api.flickr.com/services/rest/?method=flickr.photos.search&user_id=84359461@N00&format=json&api_key=ef6252d82cd28e0a1084ce13ac378101&nojsoncallback=1";

client.get(flickrapi, function(data, response) {

	// console.log(data.photos.photo);
	
   var photos = data.photos.photo;

console.log(photos.length)

   // for ( var i = 0; i < photos.length; i++){

   // 	console.log(photos[i]);
   // }

   
   photos.forEach(function(elem) {
     console.log(elem.title);
     console.log("Element", elem);

   });
});
