<?php

require('secrets.php');

$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// sql to create table
$sql = "CREATE TABLE tilmeldte (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    pay int(3),
    reg_date TIMESTAMP
 )";

if ($conn->query($sql) === TRUE) {
    echo "Table created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}


for ($i=0;$i<100;$i++)
{
    $name = "Name Namesen".$i;
    $pay = ($i/4)%2;
    $sql = "INSERT INTO tilmeldte (`name`, `pay`) VALUES ('$name', '$pay')";
    if ($conn->query($sql) === TRUE)
    {
    }else{
        echo "Failed ".$sql."<br>" . $conn->error;
    }
}



$conn->close();
?> 
