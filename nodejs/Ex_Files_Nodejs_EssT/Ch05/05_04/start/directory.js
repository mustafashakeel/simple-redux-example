var fs = require("fs");


if (fs.existsSync("lib")){
	console.log(" The Directory already Exists ");

}else{
		
fs.mkdir("lib",function(err){
	if (err){
		console.log(err);
	}
	console.log("Directory created");
});	
}