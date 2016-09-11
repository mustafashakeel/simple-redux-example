function recursiveFactorial(num){
	var number = num;
	if(number ==1){
		return number;

	}else{
		return number * recursiveFactorial(number -1);
	}

}

function setfactorial(number){
	console.log(" number", number );	
var factorial =1;
	for ( var i =number ; i >=1 ; i--){
		factorial *= i;
	}
	//return factorial;
	

	document.getElementById('getFactorial').innerHTML = factorial;
}

function getFactorial(){
	var factorial = document.getElementById('factorial').value;
		
	setfactorial(factorial);

	 var  aa= recursiveFactorial(factorial);
	 alert(aa);

	 document.getElementById('recursive').innerHTML = aa; 	
 

}


