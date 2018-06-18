<?php
/*
2/ En utilisant un « template » PHP, utiliser la réponse JSON de l’appel AJAX pour afficher la liste des films à l’aide d’une boucle (Utilisation de Bootstrap et du composant Thumbnail)
*/
  var_dump($_POST["items"]);

?>


    <div id="film" class="row">
        <?php
            $items = $_POST["items"];
            foreach($items as $item) {
              echo  "<div  class='col-xs-6 col-md-3'><ul>
              <li>Nom : " .$item['nom']. "</li>
              <li>Réalisateur : "  .$item['id_real']. "</li>
              <li>Genre : "  .$item['id_genre']. "</li></ul></div>";
            } 
        ?>
            
        </div>

    </div>
            

