<?php
session_start();
$_SESSION['cart']=array(array()); 
header('location: ../html/home.html');
?>