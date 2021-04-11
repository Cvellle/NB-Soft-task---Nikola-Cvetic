<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $databaseName = "test";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$databaseName", $username, $password);
        $statement = $conn->prepare("
            INSERT INTO usersNikola(first_name, last_name, gender, birth_year, address, city, status)
            VALUES(:first_name, :last_name, :gender, :birth_year, :address, :city, :status)
        ");
        $statement->execute(array(
            "first_name" => $_POST['first_name'],
            "last_name" => $_POST['last_name'],
            "gender" => $_POST['gender'],
            "birth_year" => $_POST['birth_year'],
            "address" => $_POST['address'],
            "city" => $_POST['city'],
            "status" => 1
        ));
    }
    catch(PDOException $e){
        throw new \Exception('Failed to insert telephone number', 400);
    }
    $result = mysqli_fetch_array($query);
    echo json_encode([response=>'success']);
?>
