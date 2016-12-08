var expect = require("chai").expect;
var tools = require("../lib/tools");

describe("printName()",function(){
	it ("It should print the last name first", function(){
			var results = tools.printName({first: "Mustafa", last :"Qureshi"});
			expect(results).to.equal("Qureshi","Mustafa");
	});
});
