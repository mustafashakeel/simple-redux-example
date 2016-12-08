// console.log()



var questions = [
"What is your name",
"what is your City"];



process.stdout.write('this is great\n\n\n\n' );
console.log('this is also consoe \n\n\n\n');

function ask(i){

	process.stdout.write(`Great this sounds good ${questions[i]}`);


}
ask(0);


process.stdin.on('data',function(data){

	process.stdout.write('this is great '+data.toString().trim());

});


// var questions = ['WHAT IS YOUR NAME ',
// 'what is your address'
// ];


// var answers = [];

// function askQ(i){

// 	//process.stdout.write("Ask Bro" + questions[i]+"\n\n\n");
// 	 process.stdout.write(`Ask Bro ${questions[i]} \n\n\n`);
// 	 process.stdout.write('>>');
// }

// process.stdin.on('data',function(data){
// 	//process.stdout.write('\n Hello '+ data +'\n');
// answers.push(data.toString().trim());
// if ( answers.length < questions.length){
// 		askQ(answers.length);
// }else{
// 	// process.stdout.write(answers);
// 	console.log(answers);
// 	process.exit();
// }

// process.on('exit',function(){
// 	process.stdout.write("\n\n\n\n");
// 	process.stdout.write(`Helloo ${answers[0]} \n\n\ Welcome to ${answers[1]}`);
// })

// });



// askQ(0);






// // function askQuestion(i){
// // 	process.stdout.write(`Ask Brother :   ${questions[i]}`);
// // }

// // process.stdin.on('data', function(data) {

// // 	process.stdout.write('This is the questions '+data.toString().trim());
// // });

// // askQuestion(0);

// // process.stdin.setEncoding('utf8');

// // process.stdin.on('data', function(data){
// // 	process.stdout.write(data);

// // });

// // process.stdin.on('end', () => {
// //   process.stdout.write('end');
// // });


// // process.stdout.write("Hello");

// // process.stdout.write("This is like console.log \n\n\n\n");

