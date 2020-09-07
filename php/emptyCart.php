<?php
session_start();
$_SESSION['cart']=array(array()); 
header('location: ../html/shoppingCart.html');
?>