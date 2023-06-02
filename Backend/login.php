<?php
// Establish database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "miniprojectcv";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the login form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $userPass = $_POST['password'];

    // Prepare and execute SQL query to check if email and password match
    $stmt = $conn->prepare("SELECT * FROM `userinfo` WHERE email = '$email'");
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if a row is returned
    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        // Check if password matches
        if ($row['userpass'] == $userPass) {
            // Email and password matched
            header("Location:../src/dashboard/index.html");
        } else {
            // Password does not match
            echo "<script>
                localStorage.setItem('passMatch', 'false');
                window.location.href = '../src/accounts/signin/index.html';
            </script>";
        }
    } else {
        echo "<script>
            localStorage.setItem('accountExist', 'false');
            localStorage.setItem('passMatch', 'true');
            window.location.href = '../src/accounts/signin/index.html';
        </script>";
    }

    $stmt->close();
}

$conn->close();
?>
