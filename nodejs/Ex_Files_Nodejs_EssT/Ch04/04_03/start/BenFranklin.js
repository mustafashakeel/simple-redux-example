var events = require('events').EventEmitter, 
	util = require('util');

	var Person = function(name){
			this.name = name;
	}
	util.inherits(Person, events);
	var mustafa = new Person("Mustafa Qureshi");

	mustafa.on("speak", function(said){
		console.log(` ${this.name} : ${said}`);
	});

	mustafa.emit("speak", "You may delay and time will not delay");

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// var ringBell = function ringBell()
// {
//   console.log('ring ring ring');
// }
// eventEmitter.on('doorOpen', ringBell);

// eventEmitter.emit('doorOpen');



// var events = require('events');
// var emitter = new events.EventEmitter();
// 	emitter.on('customEvent', function(message, status){
// 			console.log(` ${status}  : ${message}`);
// 	});

// emitter.emit('customEvent', "Hello World " ,200);


