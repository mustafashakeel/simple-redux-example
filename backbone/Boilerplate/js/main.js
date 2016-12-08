
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.


var Qureshi = Backbone.Model.extend();

var first = new Qureshi({
	name:'Mustafa',
	spouse:'Sabah',
	residense:'Coquitlam'
});

var Make = Backbone.Model.extend({
	validate:function(attr){
		if(!attr){
			return "Title Required ";
		}
	}
});


var craft = new Make();