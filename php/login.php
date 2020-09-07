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

$username = $_POST['uname'];
$password = $_POST['psw'];

$username = stripcslashes($username);
$password = stripcslashes($password);

$cookie_name = "attempted";
$cookie_value = false;
setcookie($cookie_name, $cookie_value, time() + (1), "/"); // save cookie for 1 second

$sql = "SELECT * FROM `usercredentials` WHERE username = '$username' AND password = '$password'";
$result = mysqli_query($conn,$sql);

$row = mysqli_fetch_array($result);
if($row['username'] == $username and $row['password'] == $password){
    $_SESSION["userId"] = $row['userId'];
    $_SESSION['cart']=array(array()); 
    header('location: ../html/home.html');
}
else{
    $cookie_name = "attempted";
    $cookie_value = true;
    setcookie($cookie_name, $cookie_value, time() + (1), "/"); // save cookie for 1 second
    header('location: ../html');
}

mysqli_close($conn);
?>