<?php
/*
2/ En utilisant un « template » PHP, utiliser la réponse JSON de l’appel AJAX pour afficher la liste des films à l’aide d’une boucle (Utilisation de Bootstrap et du composant Thumbnail)
*/
// faire des tests à chaque étape et continuer quand il n'y a plus d'erreur
    $items = $_POST["items"];

    //var_dump($items);

    // utilisation du Custom content thumbnails de bootstrap 3 sans le bouton et l'image
        foreach($items as $item) {
            ?>

            
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"><?= $item["title"] ?></h5>
                            <p class="card-text"><?= $item["description"] ?></p>
                            <a href="#" class="btn btn-primary">Plus d'infos</a>
                        </div>
                    </div>
                </div>
            
        <?php
        } 
        ?>
            
        </div>

    </div>
            

