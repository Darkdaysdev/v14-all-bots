<?php

    $con=mysqli_connect('127.0.0.1','root','','takachi');

    if(!$con)
    {
        die(' Please Check Your Connection'.mysqli_error($con));
    }
?>