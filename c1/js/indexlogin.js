function loginValidate(checkSuccess) {
    let userName = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    checkSuccess(userName,password);
} 
function onSuccess(uname,pwd) {
        if (uname == "admin" && pwd == "12345") {
            document.querySelector("form").action = "./todolist.html";
        }
        else {
            alert("Invalid login");
        }
}

function onLogin() {
    loginValidate(onSuccess);
}   

