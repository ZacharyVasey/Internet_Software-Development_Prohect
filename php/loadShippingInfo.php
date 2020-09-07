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
$userId = $_SESSION["userId"];
$sql="select * from userinformation where userId = '$userId';";

$result = mysqli_query($conn,$sql);
    $returnInfo = "[";
    while($row = mysqli_fetch_array($result)) {
        $returnInfo = $returnInfo . "{address1: \"" . $row['address1'] . "\","
            . "address2: \"" . $row['address2'] . "\","
            . "city: \"" . $row['city'] . "\","
            . "state: \"" . $row['state'] . "\","
            . "zip: \"" . $row['zip'] . "\"},";
    }
    $returnInfo = $returnInfo ."]";
echo $returnInfo;
//return $returnInfo;
mysqli_close($conn);
?>