<?php
session_start();
$cardType=$_POST['paymentSelect'];
$cardNum=$_POST['cardNumberTxt'];
$date=$_POST['cardExpirationTxt'];
$userID = $_SESSION['userId'];
<<<<<<< HEAD

$productId = $_SESSION['cart']['1']['productId'];
$units = $_SESSION['cart']['1']['units'];
$totalPrice = $_POST['total'];

=======
>>>>>>> 2e2d8b91ed82376f6af28c57af69f000bd4e1300

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cs3320";
//Connection
$conn = new mysqli($servername, $username, $password, $dbname);
//Error check
if($conn->connect_error){
	die("Connection failed: " . $conn->connect_error);
}
<<<<<<< HEAD
$sql1 = "INSERT INTO paymentinformation (userId, cardType, cardNumber, expDate) VALUES ('$userID', '$cardType', '$cardNum', '$date') ON DUPLICATE KEY UPDATE    
cardType = '$cardType', cardNumber = '$cardNum', expDate = '$date'";

$sql2 = "INSERT INTO orders (userId, productId, quantity, totalPrice) VALUES ('$userID', '$productId', '$units', '$totalPrice')";

if($conn->query($sql1) === TRUE){
	if($conn->query($sql2) === TRUE){
		include("../html/ThankYou.html");
		$_SESSION['cart']=array(array()); 
	}
=======
$sql = "INSERT INTO paymentinformation (userId, cardType, cardNumber, expDate) VALUES ('$userID', '$cardType', '$cardNum', '$date') ON DUPLICATE KEY UPDATE    
cardType = '$cardType', cardNumber = '$cardNum', expDate = '$date'";

if($conn->query($sql) === TRUE){
	include("../html/ThankYou.html");
>>>>>>> 2e2d8b91ed82376f6af28c57af69f000bd4e1300
}
else{
	echo "failed to write to database" . $conn->error;
}
/////$conn->close();
?>