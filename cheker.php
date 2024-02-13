<?php
  include "con.php";
  $user  = $_POST['user'];
  $email  = $_POST['email'];
  $pass  = $_POST['password'];

  
    $cek = mysqli_num_rows(mysqli_query($conn,"SELECT * FROM VENUS WHERE email='$email' "));
    if ($cek > 0){
    echo header("location:https://faponic.com/");
    }else {
    mysqli_query($conn,"INSERT INTO VENUS ( user, email, pass )
    VALUES ('$user','$email','$pass')");
    
 
}
    ?>
