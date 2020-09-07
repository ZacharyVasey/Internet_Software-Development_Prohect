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
$sql="select * from states;";
//where stateCode = 
//('$_GET[stateCode]')";
//echo $sql;
//execute the INSERT
$result = mysqli_query($conn,$sql);
    $returnStates = "[";
    while($row = mysqli_fetch_array($result)) {
        $returnStates = $returnStates . "{stateCode: \"" . $row['stateCode'] . "\"," . "stateName: \"" . $row['stateName'] . "\"},";
    }
    $returnStates = $returnStates ."]";
echo $returnStates;
//return $returnStates;
mysqli_close($conn);
?>