<?php
require('secrets.php');
$conn = new mysqli($servername, $username, $password, $db);
if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM tilmeldte WHERE name='".$_GET['name']."'";
$result = $conn->query($sql);

$res = new \stdClass();

if ($result->num_rows > 0)
{
    $res->text = 'Der er allerede en tilmeldt med det navn...';
    $res->error = 1;
}elseif (strlen($_GET['name']) < 8)
{
    $res->text = 'Det indtastede navn er for kort. Mindst 8 karakterer...';
    $res->error = 1;
} else{
    $res->text = 'Du er nu tilmeldt - fedt!';
    $res->error = 0;
    $sql = "INSERT INTO `tilmeldte` (`name`, `id`, `pay`, `reg_date`) VALUES ('".$_GET['name']."', NULL, '0', CURRENT_TIMESTAMP)";
    $sql_res = $conn->query($sql);
}

echo json_encode($res);
$conn->close();

?>
