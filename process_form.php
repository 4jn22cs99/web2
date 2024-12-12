<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $serviceType = $_POST['serviceType'];

    // Display the submitted data (You can process this data, e.g., save to a database)
    echo "<h2>Registration Successful!</h2>";
    echo "<p><strong>Name:</strong> $fullName</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Phone Number:</strong> $phone</p>";
    echo "<p><strong>Timings:</strong> $address</p>";
    echo "<p><strong>Previous License:</strong> $serviceType</p>";
}
?>
