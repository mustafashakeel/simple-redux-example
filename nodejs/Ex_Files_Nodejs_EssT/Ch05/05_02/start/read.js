var fs = require('fs'),
	path = path("path");
fs.readFile('./lib/', function(err, files){
	if(err){
		console.log(err);
	}

		files.forEach(function(fileName){
				var file = path.join(__dirname, "lib", fileName);
				var stats = fs.statSync(file);
				if 
		});
	
});

//console.log( contents);
