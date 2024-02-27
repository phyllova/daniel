<?php

/* 
	Database credentials. 
	Assuming you are running MySQL
	server with default setting (user 'root' with no password) 
*/

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'upstvdxr_tempaltdb' );
define('DB_PASSWORD', 's2ljAV3G6lWC' );
define('DB_NAME', 'upstvdxr_tempaltdb');
 
/* Attempt to connect to MySQL database */

$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection

if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
};

?>