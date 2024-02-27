<?php

require __dir__ . '/sub-config.php';
require __dir__ . '/control/for-signup.php';

### start HTML

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>UpstableFX | Sign Up</title>
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

      .contact100-form-checkbox a {
            font-size: 17px
      }
</style>
</head>
<body style="background-color: #090909;">
	
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
<form action="<?php echo sysfunc::sanitize_input($_SERVER["PHP_SELF"]);?>" method="POST">
				
                        <center>
                           <img src="../img/UpstableLogoBlack.svg">
                        </center>

                    <!-- Success / Error Message displays here -->

		            <div style="text-align: center; margin-bottom: 20px; background-color: #fff">
		                <?php sysfunc::html_notice( $temp->msg ); ?>
		            </div>
                    
                    <div class="wrap-input100 validate-input" data-validate = "Enter name">
                                    <span class="email_icon">
                                          <i class="zmdi zmdi-account"></i>
                                    </span>
						<input id="inp" class="input100" type="text" name="username" value="<?php echo $username; ?>">
						<span class="focus-input100" data-placeholder="Full name"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
                                    <span class="email_icon">
                                          <i class="zmdi zmdi-email"></i>
                                    </span>
						<input id="inp" class="input100" type="email" name="email" value="<?php echo $email; ?>">
						<span class="focus-input100" data-placeholder="Email"></span>
                    </div>
                    
                    <input type="hidden" name="bonus" value="<?php echo $rb;?>">

                    
                    <div class="wrap-input100 validate-input">
                    <span style="top: -29px;" class="focus-input100" data-placeholder="Country"></span>
                    <select class="form-control " style="border: none;" name="country" required>
                        <?php foreach( sysfunc::countries() as $key => $country ): ?>
                        <option value="<?php echo $key; ?>"><?php echo $country; ?></option>
                        <?php endforeach; ?>
                    </select>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<span class="btn-show-pass">
							<i class="zmdi zmdi-eye"></i>
						</span>
						<input id="inp" class="input100" type="password" name="password" value="<?php echo $password; ?>">
						<span class="focus-input100" data-placeholder="Password"></span>
                    </div>
                    
                    <div class="wrap-input100 validate-input" data-validate="Enter password">
						<span class="btn-show-pass">
							<i class="zmdi zmdi-eye"></i>
						</span>
						<input id="inp" class="input100" type="password" name="cpassword"value="<?php echo $cpassword; ?>" >
						<span class="focus-input100" data-placeholder="Confirm password"></span>
					</div>

                              <div class="contact100-form-checkbox">
                                  <input class="form-control " id="inp" type="hidden" name="referred" readonly value="<?php echo $refcode; ?>">
                                  
                                  <input class="input-checkbox100" id="inp" type="checkbox" name="terms" value="">

                                    <label style="font-size: 17px" class="label-checkbox100" for="ckb1">
                                          
                                          I accept the <a href='javascript:void(0)'>Terms of Service</a>
                                    </label>
                              </div>

					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn" style="border-radius: 14px">
							<div class="login100-form-bgbtn"></div>
							<button type="submit" name="submit" class="login100-form-btn">
								Sign Up
							</button>
						</div>
					</div>

					<div class="text-center p-t-115" style="padding-top: 34px">
						<span class="txt1">
							Have an account?
						</span>

						<a class="txt2" href="index.php">
							login
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