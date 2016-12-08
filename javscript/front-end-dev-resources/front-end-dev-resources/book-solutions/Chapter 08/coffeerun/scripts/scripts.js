(function(window){
	'use strict';
	var family = window.family || {};

	function members(){
		console.log(" These are from the members ");
		this.data = {};

	}
	members.prototype.add = function(key, value){
		this.data[key] = value;

	};
	members.prototype.get = function(key){
		return this.data[key];
	};
	members.prototype.getall = function(){
		return this.data;
	};
	members.prototype.remove = function(key){
		delete this.data[key];
	};
	family.members = members;
	window.family = family;


})(window);

