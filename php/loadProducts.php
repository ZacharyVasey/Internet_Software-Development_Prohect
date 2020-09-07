<?php


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
$sql="select * from products;";
//where stateCode = 
//('$_GET[stateCode]')";
//echo $sql;
//execute the INSERT
$result = mysqli_query($conn,$sql);
    $returnProducts = "[";
    while($row = mysqli_fetch_array($result)) {
        $returnProducts = $returnProducts . "{price: \"" . $row['price'] . "\"," . "gameName: \"" . $row['gameName'] . "\"},";
    }
    $returnProducts = $returnProducts ."]";
echo $returnProducts;
//return $returnStates;
mysqli_close($conn);
?>