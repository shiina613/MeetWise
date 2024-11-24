
const orderSelect = document.getElementById('order');

orderSelect.addEventListener('change', (event) => {
    const selectedOrder = event.target.value;
    sortEvents(selectedOrder);
});

function sortEvents(order) {

    fetch('http://localhost:8080/meetings')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('table tbody');
            tableBody.innerHTML = ''; // Xóa dữ liệu cũ

            if (order === 'dateincrease') {
                data.sort((a, b) => new Date(a.thoiGianBatDau) - new Date(b.thoiGianBatDau)); // Ngày tăng dần
            } else if (order === 'datedecrease') {
                data.sort((a, b) => new Date(b.thoiGianBatDau) - new Date(a.thoiGianBatDau)); // Ngày giảm dần
            }

            data.forEach(meeting => {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>${meeting.tenCuocHop}</td>
                <td>${new Date(meeting.thoiGianBatDau).toLocaleString()}</td>
                <td>${meeting.phongBan}</td>
                <td>${meeting.phongHop}</td>
                <td>${meeting.status}</td>
                <td>${meeting.maGoiNho}</td>
                <td>${meeting.nguoiTao}</td>
                <td>${meeting.fileTranscript}</td>
                <td><button>Tham gia</button></td>
            `;
                tableBody.appendChild(row);

            });
        })
        .catch(error => console.error('Error fetching meetings:', error));
}