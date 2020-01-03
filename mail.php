<?

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if(isset( $_GET['name']))
$name = $_GET['name'];

if(isset( $_GET['email']))
$email = $_GET['email'];

if(isset( $_GET['telephone']))
$tel = $_GET['telephone'];

if(isset( $_GET['message']))
$message = $_GET['message'];

$to = "_mainaccount@jaymetibbatts.com";
$subject = $name . " is interested in a Free Trial.";
$txt = str_replace("\n.", "\n..", $message);


$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: $email" . "\r\n";


$message = "
<html>
<head>
<title>Email From: $email</title>
</head>
<body>
<p>RE: $subject </p>
<p>$txt</p>
<p>Telephone Number: $tel</p>
<table>
<tr>
<th>$name</th>
</tr>
</table>
</body>
</html>
";


if( empty($_POST["privacy-check"]) ) { 
    echo "Checkbox was left unchecked."; 
} else { 
    $mail = mail($to, $subject, $message, $headers);
}






if($mail){
    //echo "Message accepted";
    header("Location: http://jaymetibbatts.com/done.html");
} else {
    //echo "Error: Message not accepted";
}
?>
