<?php
$x = FFI::new("int");
var_dump($x->cdata);

$x->cdata = 5;
var_dump($x->cdata);

$myfile = fopen("tilemapArray.txt", "w") or die("Unable to open file!");
$txt = $x->cdata;
fwrite($myfile, $txt);
fclose($myfile);
