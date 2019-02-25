<?php
//change server, password, and dbname!
$server = "localhost";
$username = "student";
$password = "password";
$dbname = "Hotel";
//connection
$conn = new mysqli($servername, $username, $password, $dbname);

//check
if($conn->connect_error){
	die("Connection failed: ". $conn->connect_error);
}

//SANITIZE INPUTS
function newAccount($user, $pass){
	$grad_year = 2021;//get grad year from username(email)
	$sql = "INSERT INTO accounts (user, pass, banned, grad_year, major1, major2, minor1, minor2, blocked_users) VALUES ($user, $pass, 0, , 0, 0, 0, 0, '');";
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
	$sql = "INSERT INTO posts (title, body, score, user, id, edited) VALUES ('', $body, 0, $user, $id, 0);";
	if($conn->query($sql) === TRUE){
		echo "Post created successfully";
	}
	else{
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
}

?>
