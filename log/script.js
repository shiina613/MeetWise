function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Ẩn tất cả các tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Xóa class "active" ở tất cả các nút
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Hiển thị tab được chọn và thêm class "active" vào nút được chọn
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Mở tab "Đăng Nhập" mặc định
document.getElementById("defaultOpen").click();
