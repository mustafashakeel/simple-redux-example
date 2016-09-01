function setfactorial(number){
	console.log(" number", number );	
var factorial =1;
	for ( var i =number ; i >=1 ; i--){
		factorial *= i;
	}
	//return factorial;
	console.log(factorial);

	document.getElementById('getFactorial').innerHTML = factorial;
}

function getFactorial(){
var factorial = document.getElementById('factorial').value;

alert(factorial);	
setfactorial(factorial);
}


