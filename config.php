<?php

    $dbHost = 'Localhost';
    $dbUsername = 'root';
    $dbPassword = 'usbw';
    $dbName = 'quiz1';

    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

    //if($conexao->connect_errno)
    //{
    //    echo "Erro";
    //}
    //else
    //{
    //    echo "Conexão feita com sucesso";
    //}
?>