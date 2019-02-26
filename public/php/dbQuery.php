<?php
$server = "35.236.96.52:3306";
$username = "student";
$password = "intoPDX411";
$dbname = "UPAF";
//connect
$conn = new mysqli($servername, $username, $password, $dbname);

//check
if($conn->connect_error){
	die("Connection failed: ". $conn->connect_error);
}

//SANITIZE INPUTS
function newAccount($user, $pass){
	$grad_year = 2021;//get grad year from username(email)
	$sql = "INSERT INTO accounts (user, pass) VALUES ($user, $pass);";
	if($conn->query($sql) === TRUE) {
		echo "Account created successfully!";
	}
	else{
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
}

function newPost($title, $body, $user, $id){
	$sql = "INSERT INTO posts (title, body, score, user, id, edited) VALUES ($title, $body, 0, $user, $id, 0);";
	if($conn->query($sql) === TRUE){
		echo "Post created successfully";
	}
	else{
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
}

function newComment($body, $user, $id)[
	$sql = "INSERT INTO posts (body, score, user, id, edited) VALUES ($body, 0, $user, $id, 0);";
	if($conn->query($sql) === TRUE){
		echo "Post created successfully";
	}
	else{
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
}

?>
