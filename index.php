<html lang="en">

<head>
    <style>
        body {
            padding: 0;
            margin: 0;
        }
    </style>
    <script src="lib/p5.js"></script>
    <script src="lib/p5.sound.min.js"></script>
    <script src="sketch.js"></script>
    <a href="tpl.gohtml">Golang</a>
</head>

<body>
    <?php

    echo '<h1>PHP random number generator</h1>';
    // Generating a random number 
    $randomNumber = rand();

    // Print 
    print_r($randomNumber);

    print_r("<br>");

    // Generating a random number in a  
    // Specified range. 
    $randomNumber = rand(15, 35);

    // Print 
    print_r($randomNumber);
    ?>
    <h1>A login form</h1>
    <form action="processLogin.php" id="loginForm" method="post">
        <input type="text" name="username" placeholder="Username" id="username">
        <br>
        <input type="password" name="password" placeholder="Password" id="password">
        <br>
        <input type="submit" name="submit" value="Log in">
    </form>

    <h1>A small game written in JS</h1>
</body>

</html>