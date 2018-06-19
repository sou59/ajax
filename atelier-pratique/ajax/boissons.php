<?php
require_once("../system/db.php");

$db = new DB("localhost", "root", "", "energydrink");

// obtenir la liste des films

$sql = "SELECT * FROM boissons";

$query = $db->query($sql);

$boissons = $query->fetchAll();


//var_dump($boissons); // ne pas laisser afficher sinon cela ne fonctionne pas, cette page ne doit afficher que le JSON

// afficher les résultats au format JSON
$json = json_encode($boissons);
echo $json;  // ne pas oublier de l'afficher ! !


?>