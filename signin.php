<?php
require_once('db_connection.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $stmt = $db->prepare("SELECT id, password FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        session_start();
        $_SESSION['user_id'] = $user['id'];
        header("Location: dashboard.php"); // Redirect to a protected page
    } else {
        // Display an error message (Invalid credentials)
        $error_message = "Invalid email or password";
    }
}
?>
<?php
// Database configuration
$servername = "your_servername";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

// Create a database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Your HTML head content here -->
</head>
<body>
    <form method="post" action="signin.php">
        <input type="email" name="email" placeholder="Email" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit">Sign In</button>
    </form>
    <?php if (isset($error_message)) echo "<p>$error_message</p>"; ?>
</body>
</html>
