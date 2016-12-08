var Person = require('./lib/Person');

var ben = new Person("Ben Franklin");
var mustafa = new Person("Mustafa Qureshi");



ben.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});


ben.emit('speak', "You may delay, but time will not.");


mustafa.on('say',function(say){
	console.log(`${this.name}  : ${say}`);
});

mustafa.emit('say','My Biggest problem is that I have no problems ');