<?php
$name = strval($_POST['name']);
$email = strval($_POST['email']);
$userPass = strval($_POST['password']);
$userPass2 = strval($_POST['password2']);

if ($userPass != $userPass2) {
    echo "<script>
        localStorage.setItem('passMatch', 'false');
        window.location.href = '../src/accounts/signup/index.html';
    </script>";
    exit();
} else {

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "miniprojectcv";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $checkEmailQuery = "SELECT * FROM `userinfo` WHERE `email` = '$email'";
    $result = $conn->query($checkEmailQuery);

    if ($result->num_rows > 0) {
        echo "<script>
    localStorage.setItem('wrongMail', 'true');
    window.location.href = '../src/accounts/signup/index.html';
    </script>";
    } else {
        $stmt = $conn->prepare("INSERT INTO `userinfo`(`name`, `email`, `userpass`) VALUES ('$name','$email','$userPass')");

        if ($stmt->execute()) {
            header("Location:../src/dashboard/index.html");
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    }

    $conn->close();
}
?>