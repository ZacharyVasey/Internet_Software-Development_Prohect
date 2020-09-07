<?php
session_start();
$cart = json_encode($_SESSION['cart']);
echo $cart;
?>