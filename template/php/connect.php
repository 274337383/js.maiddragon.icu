<?php

$hostname = "maiddragon.icu";
$username = "root";
$password = "Acceleator2018";
$dbname = "test";
$port = 3306;

$conn = mysqli_connect($hostname, $username, $password, $dbname, $port);

if (! $conn) {
    echo "连接失败!" . $conn->connect_error;
} else {
    echo "连接成功!";
}

$sql = "SELECT cname, ename FROM test.movie250";

if ($result = mysqli_query($conn, $sql)) {
    while ($obj = mysqli_fetch_object($result)) {
        printf("%s : %s", $obj->cname, $obj->ename);
        echo "<br />";
    }

    // 释放结果集合
    mysqli_free_result($result);
}

$conn->close();

echo "<br />";

echo "连接关闭";
