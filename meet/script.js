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

// Mở tab "Tham gia" mặc định
document.getElementById("defaultOpen").click();

ocument.getElementById('formJoin').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngừng form gửi đi tự động

    // Lấy giá trị từ form
    const maCuocHop = document.getElementById('ma-goi-nho').value;
    const password = document.getElementById('pass').value;
    // Gửi dữ liệu đăng ký tới backend
    const createData = {
        maCuocHop: maCuocHop,
        password: password,
    };

    fetch('#join', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Đảm bảo rằng dữ liệu được gửi dưới dạng JSON
        },
        body: JSON.stringify(registerData) // Chuyển đổi đối tượng JavaScript thành chuỗi JSON
    })
        .then(response => response.json())
        .then(data => {
            window.location.href = "#"; // Điều hướng sau khi đăng ký thành công
        })
        .catch(error => {
            alert('Lỗi : ' + error);
        });
});

document.getElementById('formCreate').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngừng form gửi đi tự động

    // Lấy giá trị từ form
    const tenCuocHop = document.getElementById('tenCuocHop').value;
    const thoiGian = document.getElementById('thoiGianBatDau').value;
    const tenPhongBan = document.getElementById('tenPhongBan').value;
    const tenPhongHop = document.getElementById('tenPhongHop').value;
    const maChuTich = document.getElementById('maChuTich').value;
    const maThuKy = document.getElementById('maThuKy').value;
    const maGoiNho = document.getElementById('maGoiNho').value;

    // Gửi dữ liệu đăng ký tới backend
    const createData = {
        tenCuocHop: tenCuocHop,
        thoiGian: thoiGian,
        tenPhongBan: tenPhongBan,
        tenPhongHop: tenPhongHop,
        maChuTich: maChuTich,
        maThuKy: maThuKy,
        maGoiNho: maGoiNho
    };

    if (tenPhongban === '') {
        alert('Vui lònggg chọn phòng ban!');
        return;
    }

    fetch('http://localhost:8080/meetings/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Đảm bảo rằng dữ liệu được gửi dưới dạng JSON
        },
        body: JSON.stringify(registerData) // Chuyển đổi đối tượng JavaScript thành chuỗi JSON
    })
        .then(response => response.json())
        .then(data => {
            alert('Tạo cuộc họp thành công');
            window.location.href = "#"; // Điều hướng sau khi đăng ký thành công
        })
        .catch(error => {
            alert('Lỗi : ' + error);
        });
});