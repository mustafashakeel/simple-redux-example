// This will set the Paths which can be further used in other  js files

require.config({
	paths:{
		'jquery':'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery'
	}
});

// this will load the main js file 

require(['main'],function(){});