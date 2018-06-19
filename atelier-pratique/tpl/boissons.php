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


            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <div class="row">
                        <div class="col-6">
                            <h5 class="card-title pt-2 pl-2"><?= $item["title"] ?></h5>
                        </div>
                        <div class="col-6 text-right pt-2">
                            <i class="fas fa-bolt"></i>
                        </div>
                    </div>
                    <hr>
                    <div class="card-body">
                        <p class="card-text"><?= $item["description"] ?></p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Plus d'infos</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><?= $item["title"] ?></h5>
                        <p class="card-text"><?= $item["description"] ?></p>
                        <a href="#" class="btn btn-primary">Plus d'infos</a>
                    </div>
                </div>
            </div> -->
            
        <?php
        } 
        ?>
            
        </div>

    </div>
            

