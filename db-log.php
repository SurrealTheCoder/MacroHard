<?php
header("Location: http://macrohard.epizy.com/Confirmation.html");
exit();

    try {
        $conn = new PDO("odbc:formdatabase", "", "");
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected successfully";
    } catch (PDOException $e) {
        echo "Conection failed: " . $e->getMessage();
    }

$sql = "INSERT INTO `checkout` (prefix, firstName, lastName, email, ccn, cvv, expiry, streetAddress1, streetAddress2, city, state1, zip, billingAddress1, billingAddress2, city2, state2, zip2, phoneNumber)
                                        VALUES (:prefix, :firstName, :lastName, :email, :ccn, :cvv, :expiry, :streetAddress1, :streetAddress2, :city, :state1, :zip, :billingAddress1, :billingaddress2, :city2, :state2, :zip2, :phoneNumber)";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(":prefix", $prefix);
$stmt->bindParam(":firstName", $firstName);
$stmt->bindParam(":lastName", $lastName);
$stmt->bindParam(":email", $email);
$stmt->bindParam(":ccn", $ccn);
$stmt->bindParam(":cvv", $cvv);
$stmt->bindParam(":expiry", $expiry);
$stmt->bindParam(":streetAddress1", $streetAddress1);
$stmt->bindParam(":streetAddress2", $streetAddress2);
$stmt->bindParam(":city", $city);
$stmt->bindParam(":state1", $state1);
$stmt->bindParam(":zip", $zip);
$stmt->bindParam(":billingAddress1", $billingAddress1);
$stmt->bindParam(":billingAddress2", $billingAddress2);
$stmt->bindParam(":city2", $city2);
$stmt->bindParam(":state2", $state2);
$stmt->bindParam(":zip2", $zip2);
$stmt->bindParam(":phoneNumber", $phoneNumber);


$form = $_POST;
$prefix = $form[ 'prefix' ];                    
$firstName = $form[ 'firstName' ];                   
$lastName = $form[ 'lastName' ];                 
$email = $form[ 'email' ];   
$ccn = $form[ 'ccn' ];
$cvv = $form[ 'cvv' ];
$expiry = $form[ 'expiry' ];
$streetAddress1 = $form[ 'streetAddress1' ];
$streetAddress2 = $form[ 'streetAddress2' ];
$city = $form[ 'city' ];
$state1 = $form[ 'state1' ];
$zip = $form[ 'zip' ];
$billingAddress1 = $form[ 'billingAddress1' ];
$billingAddress2 = $form[ 'billingAddress2' ];
$city2 = $form[ 'city2' ];
$state2 = $form[ 'state2' ];
$zip2 = $form[ 'zip2' ];
$phoneNumber = $form[ 'phoneNumber' ];              


$result = $stmt->execute();

if($result == null) {
    echo '<script>alert("Your Transaction could not be processed, please try again soon.")</script>';

    }// end if
else {
    echo '<script>alert("Thank You for Checking Out!")</script>';
    }// end else

    exit();

?>
