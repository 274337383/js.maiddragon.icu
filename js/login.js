function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    $.ajax({
        type: "POST",
        dataType: "json",
        url: '/user/login',
        contentType: "application/json",
        data:JSON.stringify({
            "userName": username,
            "passWord": password
        }),
        success: function (result) {
            console.log("data is :" + result)
            if (result.code === 200) {
                alert("登陆成功");
                window.location.href = "index.html";
            }else {
                alert(result.message)
            }
        }
    });
}