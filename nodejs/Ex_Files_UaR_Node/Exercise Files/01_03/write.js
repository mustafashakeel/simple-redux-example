var fs = require('fs');

var myname = '{ "name":"Mustafa" }';

var broname = {
	second: 'Eisa',
	third: 'Amer'
};
fs.writeFile('name.json',myname);

fs.writeFile('mybro.json',JSON.stringify(broname));


