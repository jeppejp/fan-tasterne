<?php

switch($_GET['p'])
{
    case "start":
    case "vogne":
    case "tilmelding":
    case "tilmeldte":
    case "om":
        $page = $_GET['p'];
        break;
    default:
        $page = "start";
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="utf-8" />
    <title>Fan-Tasterne.dk</title>


    <?php
    $filename = $page.".txt";
    $myfile = fopen($filename, "r") or die("Unable to open file!");
    echo "<script>\n  var text =\"";
    $output = fread($myfile,filesize($filename));
    $output = str_replace("\n","\\n",$output);
    $output = str_replace("\r","",$output);
    echo $output;
    echo "\";\n";
    echo "</script>\n";
    fclose($myfile);
    ?>
    <script src="showdown.js"></script>
    <script src="scripts.js"></script>
<?php
    if ($page == 'tilmeldte')
    {
        echo "<script>view_tilmeldte();</script>";
    }
?>

    <link href="https://fonts.googleapis.com/css?family=Overpass%7COverpass+Mono" rel="stylesheet">
    <link href="style.css" rel="stylesheet" type="text/css">
</head>







<div id="menu">
<?php
function printMenuItem($url, $name, $p)
{
    if ($url == $p)
    {
        $cl = "menuitema";
    }else{
        $cl = "menuitem";
    }
    echo "<a href=\"?p=".$url."\"><div class=\"".$cl."\">".$name."</div></a>";
}
printMenuItem("start", "Velkommen", $page);
printMenuItem("vogne", "Tidligere Vogne", $page);
printMenuItem("tilmelding", "Tilmelding", $page);
printMenuItem("tilmeldte", "Tilmeldte", $page);
printMenuItem("om", "Om Fan-Tasterne", $page);
?>

</div>
<div id="output"></div>

</html>
