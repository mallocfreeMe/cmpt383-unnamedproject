<?php
@$username = trim($_POST["username"]);
@$password = trim($_POST["password"]);

$file = "private/user.txt";
$handler = fopen($file, "r");

// open handler
if ($handler) {
    while (!feof($handler)) {
        // remove all the ',' from the array
        $array = explode(',', fgets($handler));
        // find the right match
        if (trim($array["0"]) == $username && trim($array["1"]) == $password) {
            fclose($handler);
            // pass name to game page through url
            $string = "Location: game.php?name=" . $array["0"];
            header($string);
            die();
        }
    }
    // did not find the right match, go back to log in page
    fclose($handler);
    header("Location: login.php");
    die();
} else {
    // if file cannot be opened
    // redirect to the register page, and kill itself
    header("Location: index.php");
    die();
}
