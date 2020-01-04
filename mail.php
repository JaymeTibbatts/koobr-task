<?

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$name = "";
$email = "";
$tel = "";
$message = "";
$subject = "";
$txt = "";
$mail = "";

if(isset( $_POST['name']))
$name = $_POST['name'];
$name = stripslashes($name);

if(isset( $_POST['email']))
$email = $_POST['email'];
$email = stripslashes($email);

if(isset( $_POST['telephone']))
$tel = $_POST['telephone'];
$tel = stripslashes($tel);

if(isset( $_POST['message']))
$message = $_POST['message'];
$message = stripslashes($message);

$to = "sub@jaymetibbatts.com";
$subject = $name . " is interested in a Free Trial.";
$txt = str_replace("\n.", "\n..", $message);

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

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: $email" . "\r\n";
$headers .= "Cc:  $email" . "\r\n";

    if( empty($_POST["privacy-check"]) ) { 
        echo "Checkbox was left unchecked."; 
        
    } else { 
        $mail = mail($to, $subject, $message, $headers);

        if($mail){
            //echo "Message accepted";
            header("Location: http://jaymetibbatts.com/portfolio/koobr-task/index.php#sub-footer");
            exit;
        } else {
            //echo "Error: Message not accepted";
        }
        
    }

?>