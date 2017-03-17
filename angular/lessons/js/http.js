var app = angular.module('app',[]);

	app.controller('cont',function($scope,$http){

		$http.get("welcome.html").then(function(response){
			console.log(response);
			$scope.welcome = response.data;
		},function(response){
			$scope.welcome = "didn't work out"
		})
	})