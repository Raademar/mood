<?php
  $servername = "localhost:3306";
  $username = "root";
  $password = "Ipodftw12";

  $conn = new mysqli($servername, $username, $password);

  if($conn->connect_error) {
    die("Connection failed: " . $conn->conenct_error);
  }

  echo "Connected Successfully";

  $sql =  "CREATE TABLE userEntry (
    userid INT(6) AUTO_INCREMENT PRIMARY KEY,
    date VARCHAR(20),
    mood INT(1) NOT NULL,
    note VARCHAR(50)
  )";
  
  if($conn->query($sql) === TRUE) {
    echo "Database connected successfully"; 
  } else {
    echo "Something went wrong: ". $conn->error;
  }

  $conn->close();
