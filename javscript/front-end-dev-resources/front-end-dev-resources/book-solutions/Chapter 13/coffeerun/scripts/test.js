(function(window){
	'use strict';
	var App = window.App || {};
	var $ = window.JQuery;

	function RemoteDataStore(url){
		if(!url){
			throw new Error(' No Remote URL ');

		}
		this.serverUrl = url;

	}

	function getUrl(){
		return this.serverUrl;
	}

	App.RemoteDataStore = RemoteDataStore;
	App.getUrl = getUrl;
	window.App = App;

})(window);