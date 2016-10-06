var sales = [34,30,39,54,63,29,78];
var sdisp ="";
var tax = "";
for (var i = 0; i < sales.length; i++) {
	
	sdisp += sales[i] +" , ";

	}

console.log(sdisp);
	document.getElementById('salesdis').innerHTML = sdisp;

function salesTax(item){
	return item *1.14;
}

function Disp(item){

	var temp = "";
	for(var i=0; i< item.length; i++){

		temp += Math.round(item[i]) +" ,";
	}

return temp;

}

	stax = sales.map(salesTax);
	
	var displaytax = Disp(stax);
	
document.getElementById('tax').innerHTML = displaytax;


function totalAmmount(total, next){

	return total+next;

}


var total = stax.reduce(totalAmmount);

console.log(total);

document.getElementById('reduce').innerHTML = total;
