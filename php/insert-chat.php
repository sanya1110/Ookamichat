<?php
function encryptMessage($message, $key) {
    $ivlen = openssl_cipher_iv_length($cipher = "AES-256-CBC");
    $iv = openssl_random_pseudo_bytes($ivlen);
    $ciphertext_raw = openssl_encrypt($message, $cipher, $key, $options = OPENSSL_RAW_DATA, $iv);
    $hmac = hash_hmac('sha256', $ciphertext_raw, $key, $as_binary = true);
    $ciphertext = base64_encode($iv . $hmac . $ciphertext_raw);
    return $ciphertext;
}
?>

<?php 
session_start();
if(isset($_SESSION['unique_id'])){
    include_once "config.php";
    $outgoing_id = $_SESSION['unique_id'];
    $incoming_id = mysqli_real_escape_string($conn, $_POST['incoming_id']);
    $message = mysqli_real_escape_string($conn, $_POST['message']);
    
    // Replace 'YOUR_ENCRYPTION_KEY' with a strong random key used for encryption/decryption
    $encryptionKey = 'san@111@123##';
    
    if(!empty($message)){
        // Encrypt the message before storing it in the database
        $encryptedMessage = encryptMessage($message, $encryptionKey);
        $sql = mysqli_query($conn, "INSERT INTO messages (incoming_msg_id, outgoing_msg_id, msg)
                                    VALUES ({$incoming_id}, {$outgoing_id}, '{$encryptedMessage}')") or die();
    }
}else{
    header("location: ../login.php");
}
?>
