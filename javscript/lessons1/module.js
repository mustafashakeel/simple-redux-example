var newModule ={

	myConfig:{
		revealMe:true,
		testMe: 'Great'
	},

methodOne:function(){
console.log("This is cool",this.myConfig.revealMe?"This is awesome ":"Hmmmmmmmm");
var aa = 	this.myConfig;
console.log("aaaa",aa);
},
methodTwo: function(name,city){


	console.log("My name is ",name," and my city is ",city);

}

},
city = 'Coquitlam';


// newModule.methodOne();
// newModule.methodTwo('Mustafa',city);

(function(window){
'use strict';

var App = window.App || {};

newModule.methodOne();
App.newModule  = newModule;
window.App = App;

})(window);

