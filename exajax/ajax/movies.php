<?php
define('HOST', 'localhost');
define('USER', 'root');
define('PASS', '');
define('DB', 'cinema');

//$db = new PDO('mysql:host='.HOST.';dbname='.DB.';charset=utf8', USER, PASS, [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
// Connexion à la BDD
try { // Essaye le code
    $db = new PDO('mysql:host='.HOST.';dbname='.DB.';charset=utf8', USER, PASS, 
    [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
     PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING // active les erreurs SQL
    ]);


} catch (Exception $e) { // Si le code renvoie une erreur, fais quelque chose
    echo $e->getMessage(); // On récupére le message de l'exception
    // On peut ouvrir un nouvel onglet qui effectue une recherche sur Google avec l'erreur qu'on a obtenu
    // echo '<script>window.open("http://www.google.fr/search?q='.$e->getMessage().'");</script>';
    echo '<img src="img/confused-travolta.gif" />';
}

// $query = $db->query('SELECT * FROM films 
//   INNER JOIN realisateurs ON films.id_real = real.id
//   INNER JOIN genre ON films.id_genre = genre.id');

// $query = $db->query("SELECT films.nom, films.id_real FROM films, realisateurs.nom FROM realisateurs, genre.name FROM genre");

// $query = $db->query("SELECT films.id, films.nom, films.id_real, films.id_genre,
//        realisateurs.id, realisateurs.nom, genre.id, genre.nom
// FROM   films JOIN realisateurs JOIN genre
// ON     films.id = realisateurs.id");


$query = $db->query('SELECT * FROM films');
            // Récupére tous les film
$films = $query->fetchAll();
       // echo $films; 
        $json = json_encode($films);

        echo $json;
    


?>