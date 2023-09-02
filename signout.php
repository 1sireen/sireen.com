<?php
// Start the session
session_start();

// If the user is logged in, destroy the session to log them out
if (isset($_SESSION['user_id'])) {
    session_destroy();
}

// Redirect the user to the login page after logging out
header("Location: signin.html");
exit;
?>
