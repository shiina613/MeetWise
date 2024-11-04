<?php
$username = $_POST['username'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm-password'];

if ($password === $confirm_password) {
    echo "Đăng ký thành công!";
} else {
    echo "Mật khẩu xác nhận không khớp.";
}
?>
