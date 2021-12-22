<?php

//数据库连接
include "model.php";
//从登录页接受来的数据
$name=$_POST['username'];
$pwd=$_POST['password'];
$sql="select id,username,password from login.user where username='$name' AND password='$pwd';";
$result=mysqli_query($conn,$sql);
$row=mysqli_num_rows($result);

if(!$row){

    echo "<script>alert('密码错误，请重新输入');location='../login.html'</script>";

}
else{

    echo "<script>alert('登录成功');location='../index.html'</script>";
};