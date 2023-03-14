function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var correctUsername = localStorage.getItem("username");
    var correctPassword = localStorage.getItem("password");
    if(username === correctUsername && password == correctPassword){
        window.location = "dashboard.html";//登录成功 进入dashboard.html
    } else {
        alert("Invalid username or password");//登录失败 弹出提示信息
    }
}