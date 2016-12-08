(function(window){
	'use strict';

	var App = window.App || {},
		$ = window.jQuery;

		function FormHandler(selector){
			if(!selector){
				throw new Error( " No selector provided");
			}

			this.formElement = $(selector);
			console.log("-------",this.formElement);
		}
		App.FormHandler = FormHandler;

		window.App = App; 	
})(window)