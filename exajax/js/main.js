$(function() {
    /* Go DOM is loaded !
    Writes some lines of jQuery, I know it's more than a passion for you :) */
    


        // Appeller  une page php qui genère à la volée un JSON
           
        $.getJSON("ajax/movies.php", function(film) {
            $("#film").load("tpl/movies.php", { items: film });

            console.log(film);
            console.log(film[0]);

        });
        
});
