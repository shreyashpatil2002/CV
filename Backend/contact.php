<?php
// Retrieve form data
$subject = strval($_POST['subject']);
$name = strval($_POST['name']);
$email = strval($_POST['email']);
$description = strval($_POST['description']);

// Connect to MySQL database
$servername = "localhost"; // Change this if your MySQL server is different
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$dbname = "miniprojectcv"; // Replace with your MySQL database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute SQL statement to insert the data into the database
$stmt = $conn->prepare("INSERT INTO `usercontact`(`subject`, `name`, `email`, `description`) VALUES ('$subject','$name','$email','$description')");

if ($stmt->execute()) {
    echo "<script>alert('We will contact you 🧙‍♀️');</script>";
    header("location:../src/other/contactUs/index.html");
} else {
    echo "Error: " . $stmt->error;
}

// Close the statement and database connection
$stmt->close();
$conn->close();
?>
