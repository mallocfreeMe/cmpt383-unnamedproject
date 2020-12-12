<?php
// learn how to use PHP's FFI from https://www.php.net/manual/en/ffi.examples-basic.php

// call Foreign Function interface in PHP
// create a 20 length long int arr in C
$arr = FFI::new("int[20]");

// append tilemap design to arr
// width: 13, height: 10
// 0 means water, 1 means grass, 2 means road
$arr = [
    1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1
];

// export shell result to .txt file
$myfile = fopen("tilemapArray.txt", "w") or die("Unable to open file!");

for ($i = 0; $i < count($arr); $i++) {
    if ($i < count($arr) - 1) {
        $txt = $arr[$i] . ",";
    } else {
        $txt = $arr[$i];
    }
    fwrite($myfile, $txt);
}

fclose($myfile);
