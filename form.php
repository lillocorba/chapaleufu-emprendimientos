
<?php

$destinatario = "info@chapaleufuemprendimientos.com.ar";
$asunto = "Consulta de Servicios";
$nombre = $_POST ['nombre'] . $_POST ['apellido'] ;
$email = $_POST ['email'];
$telefono = $_POST ['telefono'];
$empresa = $_POST ['empresa'];
$mensaje = $_POST ['mensaje'];
$remitente = $_REQUEST['email'];
$header = "From: $remitente";
$mensajeCompleto = $mensaje . "\n\nNombre: " . $nombre . " / Email: " . $email . " / Empresa: " . $empresa . " / Teléfono " . $telefono; 

mail($destinatario, $asunto, $mensajeCompleto, $header);
echo "<script>alert('Correo enviado exitosamente')</script>";
echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";

?>