<?php
	$name =$email = $address = "";
$nameerror =$emailerror = $addresserror = "";


	if($_SERVER['REQUEST_METHOD'] =='POST'){

		if(empty($_POST['name'])){
			$nameerror =  "The name cannot be empty";
		}else{
			$name = test_field($_POST['name']);

		}
		if(empty($_POST['email'])){
			$nameerror =  "The Email cannot be empty";
		}else{
			$email = test_field($_POST['email']);

		}
		

		function test_field($data){
			$data = trim($data);
			$data = stripslashes($data);
			$data = htmlspecialchars($data);
			return $data;

		}
	}

?>