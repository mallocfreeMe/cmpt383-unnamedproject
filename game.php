<?php
// read tilemap arr from .txt file exported by c arr
$myfile = fopen("tilemapArray.txt", "r") or die("docker-compose run php74 php generateArray.php");
$contents = fread($myfile, filesize("tilemapArray.txt"));
fclose($myfile);
?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script>
        // pass php arr to js
        let tilemapArr = [<?php echo $contents; ?>];
    </script>
    <script src="lib/p5.js"></script>
    <script src="lib/p5.sound.min.js"></script>
    <script src="sketch.js"></script>
    <style>
        html,
        body {
            height: 100%;
        }

        body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>


<body>
</body>

</html>