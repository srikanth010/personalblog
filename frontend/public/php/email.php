<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'php-mailer/Exception.php';
require 'php-mailer/PHPMailer.php';
require 'php-mailer/SMTP.php';

// Create a new PHPMailer instance
$mail = new PHPMailer(true);

try {
    // SMTP configuration
    $mail->isSMTP();
    $mail->Host = 'email-smtp.us-east-2.amazonaws.com'; // Use your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'AKIAUR5VIMLW2KMLHRBH'; // SMTP username
    $mail->Password = 'BFnnR382IxgtQk+R5aUlwtsa+p9gZBIm7PADzwjur/o9'; // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Recipients
    $mail->setFrom('from@example.com', 'Mailer');
    $mail->addAddress('srikanth@srikanthkanteti.com', 'Srikanth Kanteti'); // Add a recipient

    // Form input details
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Attachments
    if(isset($_FILES['myfile'])) {
        $files = $_FILES['myfile'];
        $attachments = count($files['name']);
        for($i = 0; $i < $attachments; $i++) {
            if($files['error'][$i] == 0) {
                $mail->addAttachment($files['tmp_name'][$i], $files['name'][$i]);
            }
        }
    }

    // Content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = "<p>Name: $name</p><p>Email: $email</p><p>Subject: $subject</p><p>Message: $message</p>";
    $mail->AltBody = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
