var http = require('http');

http.createServer(function(request, response){
	
	var name = require('url').parse(request.url, true).query.name;

	if (name === undefined) {
		name = " great world "
	}
	console.log(" name ",name);
	response.writeHead(200, {'Content-Type': 'text/plain'});

	response.end(' Hello World');

}).listen(3000, function(){
	console.log(" server running at http://localhost:3000")
})