<?php
session_start();
session_destroy();
header('location: ../html/');
mysqli_close($conn);
?>