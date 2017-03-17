var app = angular.module('app',[]);
	app.controller('ctr',function($scope,$http){
		$http.get('http://www.w3schools.com/angular/customers.php').then(function(response){
			$scope.info = response.data.records;
		})

	});