<?php
$host = "";
$username = "";
$password = "";
$databasename = "";

// Create connection
$connect=mysqli_connect($host,$username,$password,$databasename);
//$db=mysql_select_db($databasename);

if ($_POST['find'] === "searcher") {
	$firstdata = $_POST['oneta'];
	$seconddata = $_POST['twota'];
	$thirddata = $_POST['twofm'];
	$insertview = mysqli_query($connect, "INSERT INTO ebced_searches VALUES ('', '".$firstdata."', '".$seconddata."', '".$thirddata."')");
} else if ($_POST['find'] === "founder") {
	$onlydata = $_POST['found'];
	$insertview = mysqli_query($connect, "INSERT INTO ebced_founders VALUES ('', '".$onlydata."', '')");
}
mysqli_close($connect);
?>
