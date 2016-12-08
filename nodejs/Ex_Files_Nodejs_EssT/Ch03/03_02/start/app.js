// function grab(flag) {
// 	var index = process.argv.indexOf(flag);
// 	console.log("process ", process.argv);
// 	console.log("indexOf", index);
// 	return (index === -1) ? null : process.argv[index+1];
// }

// var greeting = grab('--greeting');
// // var user = grab('--user');

// // if (!user || !greeting) {
// // 	console.log("You Blew it!");
// // } else {
// 	console.log(`Welcome ${greeting}`);
// //}



// console.log(process.argv);

function grab(flag){

	var index = process.argv.indexOf(flag);
	return (index === -1)?null:process.argv[index+1];



}

var greeting = grab('--greeting'),
 user = grab('--user');

if(!user || !greeting){
	console.log(" have are toast");

}else{

	console.log(`Welcome ${user} , ${greeting}`);
}
