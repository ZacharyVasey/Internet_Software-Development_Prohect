<?php
session_start();


$fn=$_POST['fullName'];
$a1=$_POST['address_1'];
$a2=$_POST['address_2'];
$c=$_POST['city'];
$st=$_POST['state'];
$z=$_POST['zip'];
$phone=$_POST['phone'];
$email=$_POST['email'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cs3320";
$userID = $_SESSION["userId"];
//Connection
$conn = new mysqli($servername, $username, $password, $dbname);

//Error check
if($conn->connect_error){
	die("Connection failed:  </body></html>" . $conn->connect_error);
}
echo "Connected to database";
$sql = "INSERT INTO userinformation (userId, fullname, address1, address2, city, state, zip, phone, email) 
VALUES ('$userID', '$fn', '$a1', '$a2', '$c', '$st', '$z', '$phone', '$email') ON DUPLICATE KEY UPDATE    
fullname = '$fn', address1 = '$a1', address2 = '$a2', city = '$c', state = '$st', zip = '$z', phone = '$phone', email = '$email'";


if($conn->query($sql) == TRUE){
	header('location: ../html/shoppingCart.html');}
else{
	echo "failed to write to database" . $conn->error;
}
$conn->close();
?>
