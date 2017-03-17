
var app = angular.module('main',['ngRoute']);

  app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/home',{
      templateUrl:'home.html',
      controller:'viewCtrl'
    });
  }]);

  app.controller('viewCtrl',function(){
  	console.log("viewcontorller");
  })
  