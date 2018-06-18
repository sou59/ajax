document.addEventListener("DOMContentLoaded", function() {
    //DOM chargé en JS

    // Faire un appel ajax : créer variable req
    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
    /* 5 états : savoir si l'appel a bien réussi ou pas, num 4 l'appel c'ets bine déroulé
     0 -> UNSENT requête non envoyés = function open() non appelée
     1 -> OPENED requête est envoyée = fonction open() appelée
     2 -> HEADERS_RECEIVED = fonction send() appellée
     3 -> LOADING (dur plus ou moins lgt selon le tps de réponse du seveur) = reqête en cours, en attente de la réponse
     4 -> DONE = requête terminé et réponse disponible
     XMLHttpRequest.DONE = 4
    */ 
    // vérifie à quel stade il est
    console.log(this.readyState);

        if(this.readyState == XMLHttpRequest.DONE) {
            // requête terminé et réponse disponible
            // afficher la réponse de lappel ajax
            //console.log(this.responseText);

        }


    };

    // nature de l'appel  GET ou POST/ page à interroger / asynchrone = true or false
    // req.open("GET", "http://date.jsontest.com/" , "true");
    // req.send(null);

});

$(function() {
    // DOM chargé en Jquery

    /* Requête ajax en JQuery
    $.ajax({
        type: "GET" -> définit le type de reqête à effectuer (GET par défaut)
        url: "page.php" -> la page à intérroger
    }).done(function(response) { --> Fonction prête à l'emploi avec paramettre response
        console.log(response);
    }); 

    fonction done() ou sucess() c'est la même chose

    La méthode fail() ou error() s'exécute lorsque la requête n'a pas aboutit ou si une erreur a été renvoyée
    La méthode complete() ou always() s'execute quoi qu'il arrive, qqsoit le résultat de la requête AJAX
    */

    // charger le contenu du template tpm
    // le js s'applique à partir de l'index.html

    $.ajax({
        type: "POST",
        url: "tpl/test.php",
        data: { title: "Ma fenêtre modal en AJAX" }
        }).success(function(response) {

                $("#modal").html(response);

        //console.log(response);
    }); 

    /* la même chose que ci-dessus $.ajax est équivalent à 
    $("#modal").load("tpl/test.php", { title: "Ma fenêtre modal en AJAX" });
    */

    // Manipuler du json
    $.ajax({
        
        dataType: "json", // sert à indiquer du json en retour
        url: "http://date.jsontest.com/",

        }).success(function(data) { // quand c'est du json on note date
        // ces deux ecriture sont les mêmes :         
        //console.log(data["date"]);
        console.log(data);

        $("#welcome").text("Bienvenue, nous sommes le " + data.date + " et il est " + data.time);

    }); 
  
    /*
    tout ce qui est écrit ci-dessus est équivalent à  
    $.getJSON("http://date.jsontest.com/", function(data) {
        $("#welcome").text("Bienvenue, nous sommes le "+data.date+ " et il est " + data.time);

    });

    */

    $.getJSON("https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port&autocomplete=0", function(gouv) {

        console.log(gouv);
        console.log(gouv.features[0].properties.label);

        // faire une boucle pour afficher chaque label dans un li : 
        // $.each( obj, function( key, value ) {
        //     console.log( key + ": " + value );
        //   });
        // Afficher les résulats dans une liste ordoinnhées = clé label
        for (var i = 0; i < gouv.features.length; i++) {
            $("#feature").append("<li>" + gouv.features[i].properties.label + "</li>");
         }
    
    //console.log(features.properties.label);
    });

    // Appeller  une page php qui genère à la volée un JSON
    $.getJSON("ajax/test.php", function(data) {
        console.log(data);

    });

    // Utilisation d'AJAX pour les formulaires
    $("form").on("submit", function(e) {
        e.preventDefault(); // Empêche la page de se recharger

        var formData = $(this).serialize();
        console.log(formData);

        $.ajax({
            type: "POST",
            data: formData, 
            url: "tpl/checkform.php",
        });

    });
    
});
