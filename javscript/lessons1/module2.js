var one = {

	init:function(){
		console.log("Innit");
	},
	getInfo:function(){

	}
}

function aa(){
	function wow(){}
	wow.prototype = one;
	var qq = new wow();

var aa = qq.init();
console.log(aa);



}
aa();