<?php
header("Location: http://macrohard.epizy.com/Confirmation.html");
exit();

$dbName = $_SERVER["DOCUMENT_ROOT"] . "products\products.mdb";
if (!file_exists($dbName)) {
    die("Could not find database file.");
}
$db = new PDO("odbc:DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=$dbName; Uid=; Pwd=;");

$sqli = "INSERT INTO product (FirstName, LastName, Prefix, Email, ShippingAddress1, ShippingAddress2, City, State, ZIP, BillingAddress1, BillingAddress2, City2, State2, ZIP2, PhoneNumber) 
VALUES ('$_POST[FirstName]' '$_POST[LastName]' '$_POST[Prefix]' '$_POST[Email]' '$_POST[ShippingAddress1]' '$_POST[ShippingAddress2]' '$_POST[City]' '$_POST[State]' '$_POST[ZIP]' '$_POST[BillingAddress1]' '$_POST[BillingAddress2]' '$_POST[City2]' '$_POST[State2]' '$_POST[ZIP2]' '$_POST[PhoneNumber]'";

$db->query($sqli);

mysqli_close($conn);
   
?>
