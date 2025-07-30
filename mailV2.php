<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // oder passe den Pfad zu PHPMailer manuell an

ini_set('display_errors', '0');
error_reporting(E_ALL);

define('LOG_FILE', __DIR__ . '/error_log.txt');

$db_server   = 'database-5018310625.webspace-host.com';
$db_benutzer = 'dbu2169830';
$db_passwort = 'NS.Webseite2025!';
$db_name     = 'dbs14508899';

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
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $phone   = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Speichern in Datenbank
    $sql  = "INSERT INTO kontaktformular (name, email, phone, message) VALUES (:name, :email, :phone, :message)";
    $stmt = $dbh->prepare($sql);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam(':message', $message);

    try {
        $stmt->execute();
    } catch (PDOException $e) {
        log_error("Fehler beim Einfügen in DB: " . $e->getMessage());
    }

    // E-Mail senden via SMTP
    $mail = new PHPMailer(true);

    try {
        // SMTP Konfiguration
        $mail->isSMTP();
        $mail->Host       = 'smtp.strato.de'; // Dein SMTP-Server
        $mail->SMTPAuth   = true;
        $mail->Username   = 'info@natalie-schlindwein.com'; // Deine E-Mail-Adresse
        $mail->Password   = 'NS.Webseite2025!';           // Passwort deiner E-Mail
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        $mail->setFrom('info@natalie-schlindwein.com', 'Neue Projektanfrage'); // Absenderadresse
        $mail->addAddress('info@natalie-schlindwein.com'); // Empfängeradresse
        $mail->addReplyTo($email, $name); // Antwortadresse

        $mail->isHTML(false);
        $mail->Subject = 'Du hast eine neue Projektanfrage';
        $mail->Body    =
            "Hi Natalie, du hast eine neue Anfrage von:\n\n" .
            "Name: $name\n" .
            "E-Mail: $email\n" .
            "Telefon: $phone\n\n" .
            "Nachricht:\n$message";

        $mail->send();
    } catch (Exception $e) {
        log_error("E-Mail-Versand fehlgeschlagen: {$mail->ErrorInfo}");
    }
}
?>
