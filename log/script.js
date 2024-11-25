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
    const password = document.getElementById('password_register').value;
    const repeatPassword = document.getElementById('repeatPassword').value;

    // Kiểm tra mật khẩu
    if (password !== repeatPassword) {
        alert('không khớppp!');
        return;
    }

    if (password === repeatPassword) {
        alert('Khớp');
        return;
    }

    // Gửi dữ liệu đăng ký tới backend
    const registerData = {
        username: username,
        maNhanVien: maNhanVien,
        password: password,
        repeatPassword: repeatPassword
    };

    fetch('http://localhost:8080/accounts/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Đảm bảo rằng dữ liệu được gửi dưới dạng JSON
        },
        body: JSON.stringify(registerData) // Chuyển đổi đối tượng JavaScript thành chuỗi JSON
    })
        .then(response => response.text()) // Lấy dữ liệu phản hồi dưới dạng văn bản
        .then(data => {
            // Kiểm tra nếu có lỗi
            if (data === "Đăng ký thành công") {
                alert(data); // Hiển thị thông báo "Đăng ký thành công"
                showLogin();// Điều hướng sau khi đăng ký thành công
            } else {
                alert('Lỗi đăng ký: ' + data); // Hiển thị thông báo lỗi nếu có
            }
        })
        .catch(error => {
            alert('Lỗi kết nối: ' + error.message); // Xử lý lỗi kết nối
        });
});






document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngừng form gửi đi tự động

    // Lấy giá trị từ form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Gửi dữ liệu đăng nhập tới backend
    const loginData = {
        username: username,
        password: password
    };

    fetch('http://localhost:8080/accounts/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Đảm bảo rằng dữ liệu được gửi dưới dạng JSON
        },
        body: JSON.stringify(loginData) // Chuyển đổi đối tượng JavaScript thành chuỗi JSON
    })
        .then(response => {
            if (response.ok) {
                return response.json(); // Nếu đăng nhập thành công, trả về dữ liệu JSON
            } else {
                return Promise.reject('Lỗi đăng nhập'); // Nếu có lỗi, throw ra một exception
            }
        })
        .then(data => {
            // Xử lý kết quả khi đăng nhập thành công
            console.log(data);
            alert(data.message); // Sử dụng thông điệp trả về từ backend
            window.location.href = "/home/home.html"; // Thay đổi đường dẫn trang chủ của bạn
        })
        .catch(error => {
            // Xử lý khi có lỗi đăng nhập
            alert(error);
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