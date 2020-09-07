<?php
session_start();
//error_reporting(E_ALL);
$a1=$_POST['address_1'];
$a2=$_POST['address_2'];
$c=$_POST['city'];
$st=$_POST['state'];
$z=$_POST['zip'];
$userID = $_SESSION['userId'];

/*
echo $_POST['address_1'];
echo $_POST['address_2'];
echo $_POST['city'];
echo $_POST['state'];
echo $_POST['zip'];*/


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cs3320";

//echo "Hello world\n";

//Connection
$conn = new mysqli($servername, $username, $password, $dbname);

//Error check
if($conn->connect_error){
	die("Connection failed:  </body></html>" . $conn->connect_error);
}
//echo "Connected to database";
$sql = "INSERT INTO shippinginformation (userId, address1, address2, city, state, zip) VALUES ('$userID', '$a1', '$a2', '$c', '$st', '$z') ON DUPLICATE KEY UPDATE    
address1 = '$a1', address2 = '$a2', city = '$c', state = '$st', zip = '$z'";

if($conn->query($sql) == TRUE){
	header('location: ../html/checkout.html');
}
else{
	echo "failed to write to database" . $conn->error;
}
$conn->close();
//echo "I am done\n";
?>
