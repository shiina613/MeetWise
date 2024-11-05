function showRegister() {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("register-box").style.display = "block";
    document.getElementById("forgot-password-box").style.display = "none";
}

function showLogin() {
    document.getElementById("register-box").style.display = "none";
    document.getElementById("login-box").style.display = "block";
    document.getElementById("forgot-password-box").style.display = "none";
}

function showForgotPassword() {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("register-box").style.display = "none";
    document.getElementById("forgot-password-box").style.display = "block";
}