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




document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngừng form gửi đi tự động

    // Lấy giá trị từ form
    const username = document.getElementById('username').value;
    const maNhanVien = document.getElementById('maNhanVien').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;

    // Kiểm tra mật khẩu
    if (password !== repeatPassword) {
        alert('Mật khẩu không khớp!');
        return;
    }

    // Gửi dữ liệu đăng ký tới backend
    const registerData = {
        username: username,
        maNhanVien: maNhanVien,
        password: password,
        repeatPassword: repeatPassword
    };

    fetch('#register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Đảm bảo rằng dữ liệu được gửi dưới dạng JSON
        },
        body: JSON.stringify(registerData) // Chuyển đổi đối tượng JavaScript thành chuỗi JSON
    })
        .then(response => response.json())
        .then(data => {
            alert('Đăng ký thành công');
            window.location.href = "/login"; // Điều hướng sau khi đăng ký thành công
        })
        .catch(error => {
            alert('Lỗi đăng ký: ' + error);
        });
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngừng form gửi đi tự động

    // Lấy giá trị từ form
    const ID_User = document.getElementById('ID_User_login').value;
    const Password = document.getElementById('Password_login').value;

    // Gửi dữ liệu đăng ký tới backend
    const loginData = {
        ID_User: ID_User,
        Password: Password,
    };

    fetch('/accounts/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Đảm bảo rằng dữ liệu được gửi dưới dạng JSON
        },
        body: JSON.stringify(loginData) // Chuyển đổi đối tượng JavaScript thành chuỗi JSON
    })
        .then(response => response.json())
        .then(data => {
            alert('Đăng nhập thành công');
            window.location.href = "#home"; // Điều hướng sau khi đăng ký thành công
        })
        .catch(error => {
            alert('Lỗi đăng nhập: ' + error);
        });
});

document.getElementById('forgotPasswordForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngừng form gửi đi tự động

    // Lấy giá trị từ form
    const ID_User = document.getElementById('ID_User').value;
    const Email = document.getElementById('Email').value;
    const DienThoai = document.getElementById('DienThoai').value;

    // Gửi dữ liệu đăng ký tới backend
    const loginData = {
        ID_User: ID_User,
        Email: Email,
        DienThoai: DienThoai,
    };

    fetch('forgotpass', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Đảm bảo rằng dữ liệu được gửi dưới dạng JSON
        },
        body: JSON.stringify(loginData) // Chuyển đổi đối tượng JavaScript thành chuỗi JSON
    })
        .then(response => response.json())
        .then(data => {
            alert('Gửi yêu cầu thành công');
            window.location.href = "#login"; // Điều hướng sau khi đăng ký thành công
        })
        .catch(error => {
            alert('Lỗi : ' + error);
        });
});

