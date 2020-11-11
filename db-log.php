<?php
header("Location: http://macrohard.epizy.com/Confirmation.html");
exit();

$servername = "localhost";
$username = "username";
$password = "password";

$conn = mysqli_connect('localhost', 'username', 'paassword') or die (mysqli_error());
mysqli_select_db('db_name') or die (mysqli_error());

if (!$conn) {
    die("Connection failed: " . mysqli_error());
}

$sqli = "INSERT INTO local (email, firstname, lastname, address, city, state, ZIP, Phone) VALUES ('$_POST [email]', '$_POST [firstname]', '$_POST [lastname]', '$_POST [address]', '$_POST [city]', '$_POST [state]', '$_POST [ZIP]', '$_POST [Phone]')";

mysqli_close($conn);
   
?>
