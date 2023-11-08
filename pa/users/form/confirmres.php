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
        
 $msg = "Password Reset Successful!. You will be redirected after 5 seconds";

    // Redirect to index.php after a delay
    echo '<script>
            setTimeout(function() {
                window.location.href = "https://pa.tradewithzerah.com";
            }, 5000); // Redirect after 5 seconds
          </script>';
}
               
             else{
                $msg = "Password reset failed. Please try again.";
            }
        }
         
				 
		
	}


### start HTML
require __dir__ . '/form-header.php';

?>

<body>

<section class="bg-light">
	<div class="container-fluid h-custom py-5">
		<div class="row">
			
			<div class='col-xl-4 col-lg-5 col-md-7 m-auto'>
						
					<div class="mb-4 text-center">
						<img src="<?php echo $settings['logourl']; ?>" class="img-fluid" alt="Site Icon">
						<h3 align="center" class='mb-3'>
							Password Recovery
						</h3>

					</div>


					<div class="my-4">
						<div class='card'>
							<div class='card-body'>

                                <?php if($msg != "") echo "<p> $msg</p>";  ?>
								
								<div class="login-form">
									<form action="confirmres.php?id=<?php echo $id;?>&email=<?php echo $email;?>" method="POST">
										<input placeholder="Enter new password" id="inp" type="text" name="password" class='form-control form-control-lg'>
										                                    <div class="col-xl-12 col-lg-12">
                                        <input id="inp" type="hidden" name="email" value="<?php echo $email; ?>">
                                    </div>
                                    <div class="col-xl-12 col-lg-12">
                                        <input id="inp" type="hidden" name="id" value="<?php echo $id; ?>">
                                    </div>
										</br>
										<div class="tp">
											<button type="submit" name="submit" class='btn btn-success btn-block'>Reset Now</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					
			</div>

		</div>
	</div>
</section>
</body>
</html>