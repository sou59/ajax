<?php
    // création d'un json simple

    $data = array (
        "a" => 1,
        "b" => 2,
        "c" => 3,
        "d" => 4

    );

    $json = json_encode($data);

    echo $json;



?>