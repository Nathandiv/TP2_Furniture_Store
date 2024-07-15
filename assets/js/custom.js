<?php
// Check for empty fields
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['subject']) || empty($_POST['message'])) {
    echo "All fields are required!";
    exit;
}

// Sanitize input data
$name = htmlspecialchars($_POST['name']);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars($_POST['subject']);
$message = htmlspecialchars($_POST['message']);

// Create email content
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n";
$email_content .= "Subject: $subject\n\n";
$email_content .= "Message:\n$message";

// Set up email headers
$headers = "From: $email";

// Your email address where you want to receive the emails
$to = 'your_email@example.com';

// Send email
$mail_sent = mail($to, $subject, $email_content, $headers);

// Check if mail sent successfully
if ($mail_sent) {
    echo "Thank you for your message! We will get back to you soon.";
} else {
    echo "Oops! Something went wrong and we couldn't send your message.";
}
?>
