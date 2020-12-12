<?php
@$username = trim($_POST["username"]);
@$password = trim($_POST["password"]);

$file = "private/user.txt";
$handler = fopen($file, "a+");

// open handler
if ($handler) {
    $info = $username . ","
        . $password
        . "\n";

    // write into file and close the file
    fwrite($handler, $info);
    fclose($handler);

    // redirect to game page since the validation was passed
    // close this page
    $string = "Location: game.php?name=" . $username;
    header($string);
    die();
} else {
    // if file cannot be opened
    // redirect to the register page, and kill itself
    header("Location: index.php");
    die();
}
