<?php
    $first_name=$_POST['first_name'];
    $last_name=$_POST['last_name'];
    $phone=$_POST['phone'];
    $email=$_POST['email'];
    $message=$_POST['message'];
    
    $link = mysqli_connect("localhost","root","","enquiry_form");

    if($link===false){
        die("error:could not connect.". mysqli_connect_error());
    }

    $sql = "INSERT INTO enquiry_form_my_site(first_name,last_name,phone,email,message) VALUES ('$first_name','$last_name','$phone','$email','$message')";
    
    if(mysqli_query($link,$sql)){
        echo "Record inserted successfully";
        echo "<div><a href='index.html'>Go Back</a></div>";
    }else
    {
        echo "Error:Could not able to execute $sql." . mysqli_error($link);
    }
    mysqli_close($link); 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color:rgb(205, 248, 227)">
    
</body>
</html>