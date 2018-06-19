/*
CONSIGNE : Avec l'aide de jQuery, gérer l'affichage des onglets et du contenu associé

MENU 1 --> affiche le contenu 1 et ajoute la bordure sur Menu 1
MENU 2 --> affiche le contenu 2 et ajoute la bordure sur Menu 2
MENU 3 --> affiche le contenu 3 et ajoute la bordure sur Menu 3

*/
$(function() {

    $("li").on("click", function() {
        //e.preventDefault();
    
        // On retire la classe active sur tous les éléments li, ainsi pas besoin de savoir quel li a la classe active
        $("li").removeClass("active");
        // on ajoute la clase active sur l'élément cliqué
        $(this).addClass("active");

        // index du li, parcourir l'ensemble des li avec une boucle
        // function avec parametre ex. index

        $("li").each(function(index) {
            // Index contient l'élément courant
            // test si li est en class active
            // attention cic on ne peut utiliser le this du haut

            if ($(this).hasClass("active")) {
                // je veux afficher le contenu correspondant
                $(".article").eq(index).show();
            } else {
                // je veux cacher le contenu correspondant
                $(".article").eq(index).hide();
            }

        });

    });

});