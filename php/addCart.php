<?php
session_start();
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

$price = $_POST['gamePrice'];
$units = $_POST['units'];
//echo $price;
$sql = "SELECT * FROM `products` WHERE `price` =  $price";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_array($result);

$total = $price * $units;


$add=array("productId"=>$row['productId'],"gameName"=>$row['gameName'], "units"=>$units, "price"=> $total);
array_push($_SESSION['cart'],$add); // Items added to cart
header('location: ../html/shoppingCart.html');

mysqli_close($conn);
?>