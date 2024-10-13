<?php
// Database connection
$conn = new mysqli("localhost", "root", "", "register_login");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collecting form data
$name = $_POST['name'];
$phone_no = $_POST['phoneno'];
$email = $_POST['email'];
$password = $_POST['password']; // Hashing the password

// SQL query to insert data
$sql = "INSERT INTO info (name, email, phoneno, password) VALUES ('$name','$email', '$phone_no', '$password')";
$sqll = "SELECT * FROM info WHERE email = '$email'";
    $result = mysqli_query($conn,$sqll);
    $rowcount = mysqli_num_rows($result);
    if($rowcount>0)
    {
        die("This email is already exist...");
    }
    else{
if ($conn->query($sql) === TRUE) {
    echo "Registration successful. You can now <a href='login.html'>login</a>.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
    }

// Close connection
$conn->close();
?>
