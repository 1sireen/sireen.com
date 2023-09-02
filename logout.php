<?php
// Start the session
session_start();

// Destroy the session (log out the user)
session_destroy();

// Redirect the user to the login page
header("Location: signin.html");
exit;
?>
