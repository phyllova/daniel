<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  if (empty($_POST["email"])) $email_err = "Email is required";
  
	else {
	  
		$email = sysfunc::sanitize_input($_POST["email"], true);
		
		if( empty($email) )$temp->msg = "Email fields cannot be empty!";
		
		else {
			
			$sql = "SELECT * FROM users WHERE email = '$email' ";
			$row = $link->query( $sql )->fetch_assoc();

			if( $row ) {
			  
				$id = $row['id'];
				
				$mail = sysfunc::initMail();
				$mail->addAddress($email);
				$mail->Subject = "Reset your password";
				
				$temp->mailLink = sysfunc::url( __users_reset_confirm_page ) . "?id={$id}&email={$email}";
				
				$temp->mailMsg = "
					<a href='{$temp->mailLink}'><p>RESET PASSWORD</p></a>

				";
				
				$mail->Body = (new email_handler())->message( $temp->mailMsg );
				
				if(!$mail->send()) $temp->msg = "Mailer Error: " . $mail->ErrorInfo;
				else $temp->msg =  "Password recovery information has been successfully sent to your mail.";
				
			} else $temp->msg = "Something went wrong! Request could not be handled";
			 
		}
		
	};
}