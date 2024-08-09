<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Set the recipient email address
    $to = "nylen252@gmail.com";

    // Set the email subject
    $subject = "New Contact Form Inquiry";

    // Create the email body
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message: $message";

    // Set the email headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        // Redirect to the thank you page
        header("Location: " . $_POST['_next']);
        exit();
    } else {
        // Handle error
        echo "Failed to send message. Please try again later.";
    }
} else {
    // Handle invalid request
    echo "Invalid request.";
}
?>
