<?php

ini_set('display_errors', '0');
error_reporting(E_ALL);     
define('LOG_FILE', __DIR__ . '/error_log.txt');

require 'config.php';

$db_server   = DB_SERVER;
$db_benutzer = DB_USER;
$db_passwort = DB_PASS;
$db_name     = DB_NAME;

function log_error($message) {
    $date = date('Y-m-d H:i:s');
    file_put_contents(LOG_FILE, "[$date] - $message\n", FILE_APPEND);
}

try {
    $dbh = new PDO("mysql:host=$db_server;dbname=$db_name", $db_benutzer, $db_passwort);
} catch (PDOException $e) {
    log_error("Fehler bei der Verbindung zur Datenbank: " . $e->getMessage());
    exit; 
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

$sql = "INSERT INTO kontaktformular (name, email, phone, message) VALUES (:name, :email, :phone, :message)";
 $stmt = $dbh->prepare($sql);



    $stmt = $dbh->prepare($sql);
    
   
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam(':message', $message);
    
    try {

        $stmt->execute();

        // E-Mail senden
        $to = "info@natalie-schlindwein.de"; // Die E-Mail-Adresse, an die die Nachricht geschickt werden soll
        $subject = "Neue Nachricht von deinem Kontaktformular";
        $body = "Neue Nachricht von:\n\n" .
                "Name: $name\n" .
                "E-Mail: $email\n" .
                "Telefon: $phone\n\n" .
                "Nachricht:\n$message";
        
        $headers = "From: noreply@natalie-schlindwein.de\r\n"; // Achte auf eine gültige E-Mail-Adresse
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        // Sende die E-Mail
        if (!mail($to, $subject, $body, $headers)) {
            log_error("Fehler beim Senden der E-Mail.");
        }

    } catch (PDOException $e) {
        log_error("Fehler beim Absenden der Nachricht: " . $e->getMessage());
    }
}
?>