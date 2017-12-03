// module.exports = function(grunt){
// 	grunt.registerTask('greet','greet the user ',function(){
// 		console.log("Hello World 	")
// 	});
// }

// module.exports = function(grunt){
// 	grunt.registerTask('greet','Greet the User ',function(){
// 		console.log(" Hello World");
// 	});
// 	grunt.registerTask("work","Do some work " , function(name, work){
// 		console.log("Hello ", name, "Does ", work);
// 	});
// 	grunt.registerTask('default',['greet','work:John:developer'])

// }

module.exports = function(grunt){
	grunt.initConfig({
		jshint:{
			all: ['src/*.js']
		}

	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default',['jshint']);
}