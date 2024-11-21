function getData(callback) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState === 4 && request.status === 200) {
            console.log(request);
            const obj = JSON.parse(request.responseText);
            callback(undefined, obj);
        }

        if (this.readyState === 4 && request.status !== 200) {
            callback('Sth wrong', undefined);
        }
    }

    request.open("GET", 'api'); //gọi request
    request.send(); //chạy request
}

getData(function (error, data) {
    if (error) {
        alert('Lỗi: ', error);
    }
    else {
        console.log("Dữ liệu nhận được: ", data);
    }
})

let table =

    document.getElementById('table_body').innerHTML = table;