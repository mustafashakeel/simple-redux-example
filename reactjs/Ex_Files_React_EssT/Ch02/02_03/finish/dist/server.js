var express =  require('express');
var app = express();

app.use(express.static('./'));
app.listen(3100, function(){
	console.log("  port 3000");
})