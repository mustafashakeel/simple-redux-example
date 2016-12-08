(function(window){
	'use strict';

	var family = window.family || {};

	var qureshi = new family.members();
	 qureshi.add('first brother', 'Mustafa Shakeel Qureshi');
qureshi.add('second brother', 'Eisa Shakeel Qureshi');
qureshi.add('third brother','Amer Shakeel Qureshi');

	function Location(id,loc){
		this.id = id;
		this.loc = loc;
	}

	Location.prototype.addLocation = function(apend){

		console.log("Aaaa ", this.id, "  ",this.loc);
		this.loc.add(apend.wife,apend)
		console.log(this.loc);

	};



	family.Location = Location;
	window.family = family;


// qureshi.add('first brother', 'Mustafa Shakeel Qureshi');
// qureshi.add('second brother', 'Eisa Shakeel Qureshi');
// qureshi.add('third brother','Amer Shakeel Qureshi');

// var second = qureshi.get('second brother');
// console.log(second);

// var all = qureshi.getall();

// console.log(all);


// console.log("qureshi",qureshi);


})(window);

var mustafa = new family.Location('first brother', new family.members());
mustafa.addLocation({wife:'Sabah'});