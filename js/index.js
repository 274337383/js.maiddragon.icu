function welDay() {
    let x;
    const d = new Date().getDay();
    switch (d) {
        case 0:
            x = "明天要去学校了";
            break;
        case 1:
            x = "离放假还有4天";
            break;
        case 2:
            x = "离放假还有3天";
            break;
        case 3:
            x = "离放假还有2天";
            break;
        case 4:
            x = "离放假还有1天";
            break;
        case 5:
            x = "今天就要放假了";
            break;
        case 6:
            x = "好耶";
            break;
    }

    document.getElementById("welcome").innerHTML = x;
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        const c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("username");
    if (user !== "") {
        alert("欢迎 " + user + " 再次访问");
    } else {
        user = prompt("请输入你的名字:", "");
        if (user !== "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}