<?php
	session_start();
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
	use PHPMailer\PHPMailer\SMTP;

	require '/home2/transgha/public_html/booking/PHPMailer/src/Exception.php';
	require '/home2/transgha/public_html/booking/PHPMailer/src/PHPMailer.php';
	require '/home2/transgha/public_html/booking/PHPMailer/src/SMTP.php';
	if($_POST){
		$expediteutr = "tourisme@transghazala.ma";
		$subject = 'Trans GHAZALA - New Contact Inquiry';

		$user_Name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
		$user_Subject = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
		$user_Email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
		$user_Telephone = filter_var($_POST["telephone"], FILTER_SANITIZE_EMAIL);
		$user_Message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

		$mail = new PHPMailer(true);

		try {
			//Server settings office
			
			//$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
			$mail->isSMTP();                                            //Send using SMTP
			$mail->Host       = 'mail.transghazala.ma';                   //Set the SMTP server to send through
			$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
			$mail->Username   = "devis@transghazala.ma";                 //SMTP username
			$mail->Password   = 'zfDAE2!hktf';                             //SMTP password
			$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;         //Enable implicit TLS encryption
			$mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
            //$mail->SMTPDebug = SMTP::DEBUG_SERVER;


			//Recipients
			$mail->setFrom($expediteutr, 'Trans GHAZALA');
			//$mail->addAddress('joe@example.net', 'Joe User');     //Add a recipient
			$mail->addAddress($expediteutr, 'to');               //Name is optional
			//$mail->addReplyTo('info@example.com', 'Information');
			//$mail->addCC('cc@example.com');
			//$mail->addBCC('bcc@example.com');

			//Attachments
			//$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
			//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

			//Content
			$mail->isHTML(true);                                  //Set email format to HTML
			$mail->Subject = 'Devis touristique';
			$mail->Body    = "<strong>Name: </strong>". $user_Name ."<br> <strong>Subject: </strong>". $user_Subject ."<br> <strong>Email: </strong>". $user_Email ."<br> <strong>Telephone: </strong>". $user_Telephone ."<br><br>  <strong>Message: </strong>". $user_Message ."<br>" ;
			$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

			$mail->send();
			$_SESSION['etat'] = "envoyé";
			//header("location:touristique");
			echo "true";
		} catch (Exception $e) {
			echo "false";
		}

	}
?>