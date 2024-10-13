<?php
session_start(); // Start session

// Database connection
$conn = new mysqli("localhost", "root", "", "register_login");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collecting form data
$email = $_POST['email'];
$password = $_POST['password'];

// SQL query to fetch user data based on email
$sql = "SELECT * FROM info WHERE email='$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    
    // Verify password
    if ($password == $row['password']){
        $_SESSION['user_name'] = $row['name'];
        
        // Redirect to home page
        header("Location: index.html");
        exit();
    } else {
        echo "Invalid password.";
    }
} else {
    echo "No user found with this email.";
}

// Close connection
$conn->close();
?>
