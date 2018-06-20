$(function() {
    /* Go DOM is loaded !
    Writes some lines of jQuery, I know it's more than a passion for you :) */
    


        // Requête AJAX Appeller  une page php qui genère à la volée un JSON
           
        $.getJSON("ajax/boissons.php", function(data) {

            // selectuer : là ou afficher le html
            // load : 1er argument : le template 
            // load : 2e argument : tableau associatif avec une clé, les éléments àç rtraiter et les éléments data (ce qu'on récupère via le premier appel ajax quand on appel le script au-dessus)
            $("#boissons").load("tpl/boissons.php", { items: data });

            console.log(data);
        

        });

        $(window).scroll(function() {
            var $height = $(window).scrollTop();
            if($height > 50) {
                $("nav").removeClass("mynav");
                $(".titre").hide();
            } else {
                $("nav").removeClass("mynav");
                $(".titre").show();
            }
        });  


        // fleche en bas de la vidéo
        var $scrollDownArrow = $('#scrollDownArrow');
        var animateScrollDownArrow = function() {
            $scrollDownArrow.animate( {
                top: 5,
            }
            , 400, "linear", function() {
                $scrollDownArrow.animate( {
                    top: -5,
                }
                , 400, "linear", function() {
                    animateScrollDownArrow();
                }
                );
            });
        }
        animateScrollDownArrow();

        // Bouton plus d'info 
        $(".infos").on("click", function() {
            alert("Non disponible");

        });
          
        // click sur bouton Energisante  si dispo = 0 affiche texte "non disponible"
        // d-none à supprimer si dispo = 0
        
        
});
