$(function() {
/*
CONSIGNE : Avec l'aide de jQuery, chaque bouton provoque une action sur le rectangle : 

ok-Bouton 1 : met le rectangle en vert
ok-Bouton 2 : remet les couleurs initiales
ok-Bouton 3 : fait disparaitre le rectangle
ok-Bouton 4 : fait réaparaitre le rectangle
Bouton 5 : augmente la hauteur de 10px, s'il dépasse 100px, il remet la hauteur à 10px

*/


    $("#bouton1").on("click", function(){
        $(".rectangle").addClass("color-green");

    });
    $("#bouton2").on("click", function(){
        $(".rectangle").removeClass("color-green");

    });
    $("#bouton3").on("click", function(){
        $(".rectangle").slideUp();

    });
    $("#bouton4").on("click", function(){
        $(".rectangle").slideDown();

    });
    $("#bouton5").on("click", function(){
        var hauteur = $('.rectangle').height();
        
        if ( hauteur <= 100 ) {
            hauteur += 10;
            $(".rectangle").height(hauteur);
         }else{
             $(".rectangle").height(10);
         }

    });



    



});
