<?php
require('secrets.php');

$conn = new mysqli($servername, $username, $password, $db);
if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM tilmeldte";
$result = $conn->query($sql);

if ($result->num_rows > 0)
{
    while($row = $result->fetch_assoc())
    {
        $person = new \stdClass();
        $person->name = $row['name'];
        $person->id = $row['id'];
        $person->pay = $row['pay'];
        $result_array[] = $person;
    }
}else{
    echo "NO RESULTS";
}
echo json_encode($result_array);
$conn->close();

?>
