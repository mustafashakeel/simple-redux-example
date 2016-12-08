var https = require('https'),
	fs = require("fs"),
	options= {
		hostname:"en.wikipedia.org",
		port:443,
		path:"/wiki/Akbar",
		method:"GET"
	},
	req = https.request(options,function(res)
	{
		var responseBody = "";
		console.log(" response from the server has started ");
		console.log(` Server Status : ${res.statusCode}`);
		console.log("Response Headers : %j", res.headers);
		res.setEncoding("UTF-8");
		res.once("data", function(chunk){
			console.log(chunk);

		});
		res.on("data",function(chunk){
			console.log(` --chunk-- ${chunk.length}`);
		});
		res.on("end",function(){
	
		fs.writeFile("akbar.html", responseBody, function(err){

			if (err){
				throw err;
			}
			console.log(" File Downloaded");
		});
			
		});	
	});

	req.on("error", function(err){
		console.log(` problem with request ${err.message}`);
	});
	req.end();