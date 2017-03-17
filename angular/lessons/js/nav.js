var nav = angular.module('nav',['ngRoute']);

nav.config(function($routeProvider){

	$routeProvider.when('/'	,{
		template: " <h1> This is the Main Page </h1>"
	})
	.when('/about',{
		template:"<h1>This is About Page</h1>"
	})
	.when('/contact',{
		template:"<h1> This is contact Page </h1>"
	});
});