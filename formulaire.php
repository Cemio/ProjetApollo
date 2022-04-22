<?php
if(isset($_POST['envoyer'])){ 
    $entete = 'MIME-Version: 1.0';
    $entete = 'Content-type: text/html; charset=utf8';

 $retour = mail ('cemio2525gmail.com', 'contact-appolo', $_POST[email], $_POST[sujet], $_POST[envoyer]);
}
?>