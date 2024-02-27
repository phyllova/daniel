<?php
session_start();
include "../../config/db.php";
include "../../config/config.php";
$msg = "";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$id = $_GET['id'];
$email = $_GET['email'];


if (isset($_POST['submit'])) {
 
  	
	$password = $link->real_escape_string($_POST['password']);
	
		$email= $link->real_escape_string($_POST['email']);
		
		$id= $link->real_escape_string($_POST['id']);

	
	if($password == "" ){
		$msg = "password fields cannot be empty!";
		
	}else {
	    
					$sql = "UPDATE users  SET password = '$password'  WHERE id= '$id' ";

          if($result = mysqli_query($link, $sql)){
        
 $msg = "Password Reset Successful!.";
}
               
             else{
                $msg = "error!.";
            }
        }
         
				 
		
	}




?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>UpstableFX Password Recovery</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->	
	<link rel="icon" type="image/png" href="../img/favicon.png"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
<!--===============================================================================================-->
<style type="text/css">
	.email_icon {
		position: relative;
	    float: right;
	    top: 34px;
	    right: 4px;
	    color: #999;
	}

	input {
		padding-right: 40px !important;
	}
</style>
</head>
<body style="background-color: #090909;">
	
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<form class="login100-form validate-form" action="confirmres.php?id=<?php echo $id;?>&email=<?php echo $email;?>" method="post">
					<center>
						<img src="../img/UpstableLogoBlack.svg">
					</center>

					<!-- Success / Error Message displays here -->
		            <div style="text-align: center; margin-bottom: 20px; background-color: #fff">
		                
		                <?php if($msg != "") echo "<div style='padding:20px;background-color:#dce8f7;color:black'> $msg</div class='btn btn-success'>" ."</br></br>";  ?>
		            </div>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<span class="email_icon">
							<i class="zmdi zmdi-email"></i>
						</span>
						<input id="inp" class="input100" type="text" name="password">
						<span class="focus-input100" data-placeholder="Enter New Password"></span>
					</div>
					
					<input id="inp" type="hidden" name="email" value="<?php echo $email;?>" >
                                                    
                                                    <input id="inp" type="hidden" name="id" value="<?php echo $id;?>" >
                                                    
					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn" style="border-radius: 14px">
							<div class="login100-form-bgbtn"></div>
							<button type="submit" name="submit" value="Reset" class="login100-form-btn">
								Send
							</button>
						</div>
					</div>
					<div align="center" style="padding-top: 40px">
						<a class="txt2" href="index.php">
							<i class="zmdi zmdi-arrow-left"></i> Back
						</a>
					</div>
				</form>
			</div>
		</div>

		<footer class="footer_section">
              <div class="container" align="center" style="padding-bottom: 12px; font-size: 10px">
              <div class="copyright" style="text-transform: inherit;">All rights reserved © 2024 Upstablefx</div>
              </div>
        </footer>
	</div>
	

	<div id="dropDownSelect1"></div>
	
<!--===============================================================================================-->
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/daterangepicker/moment.min.js"></script>
	<script src="vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
	<script src="vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>

</body>
</html>