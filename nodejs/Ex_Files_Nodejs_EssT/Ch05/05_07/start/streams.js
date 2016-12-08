var fs  = require('fs');
var stream = fs.createReadStream("./chat.log","UTF-8");
var data = "";
fs.readFile("./chat.log","UTF-8", function(err, log){
	console.log(` File Read ${log.length}`);
});
console.log("reading the files ");