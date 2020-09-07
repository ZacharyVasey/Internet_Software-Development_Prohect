<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cs3320";

//Connection
$conn = new mysqli($servername, $username, $password, $dbname);

//Error check
if($conn->connect_error){
	die("Connection failed:  </body></html>" . $conn->connect_error);
}
echo "Connected to database\n";

// to add another product, add ('Game Name', 'price of game') to the commented out statement bellow
//$sql = "INSERT INTO products (description, totalPrice) values ; 
//EXAMPLE --> $sql = "INSERT INTO products (description, totalPrice) values ('Cario Mart', '24.99');
 
//$sql = "INSERT INTO products (description, totalPrice) values ('Cario Mart', '24.99'), ('Shortnite', '34.99'), ('Linecraft', '29.99'), ('CS:Flow', '14.99')";

//$sql = "INSERT INTO products (description, totalPrice) values ('Don Nancy\'s Spectre Invasion', '89.99')";

//$sql = "INSERT INTO products (description, totalPrice) values ('Underwatch', '99.99')";

$sql = "INSERT INTO products (description, totalPrice) values ('Space Wars', '59.99')";

if($conn->query($sql) == TRUE){
	echo "Data saved to database";
}
else{
	echo "failed to write to database" . $conn->error;
}
$conn->close();
?>