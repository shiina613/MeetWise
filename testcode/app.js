const fileInput = document.getElementById('fileInput');
const fileTable = document.getElementById('fileTable').querySelector('tbody');

fileInput.addEventListener('change', () => {
    // Xóa các hàng cũ nếu có
    fileTable.innerHTML = '';

    // Duyệt qua các tệp đã chọn
    Array.from(fileInput.files).forEach(file => {
        const row = document.createElement('tr');

        // Cột tên tệp
        const nameCell = document.createElement('td');
        nameCell.textContent = file.name;
        row.appendChild(nameCell);

        // Cột loại tệp
        const typeCell = document.createElement('td');
        typeCell.textContent = file.type || 'N/A';
        row.appendChild(typeCell);

        // Cột kích thước
        const sizeCell = document.createElement('td');
        sizeCell.textContent = (file.size / 1024).toFixed(2); // Kích thước tính bằng KB
        row.appendChild(sizeCell);

        // Cột đường dẫn (hiển thị tạm thời)
        const pathCell = document.createElement('td');
        const url = URL.createObjectURL(file);
        pathCell.innerHTML = `<a href="${url}" target="_blank">Mở</a>`;
        row.appendChild(pathCell);

        // Thêm hàng vào bảng
        fileTable.appendChild(row);
    });
});
