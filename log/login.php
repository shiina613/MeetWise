<?php
$username = $_POST['username'];
$password = $_POST['password'];

// Giả sử bạn kiểm tra tên đăng nhập và mật khẩu
if ($username === 'admin' && $password === '1234') {
    echo "Đăng nhập thành công!";
} else {
    echo "Tên đăng nhập hoặc mật khẩu không đúng.";
}
?>
