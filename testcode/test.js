

function getTodos(id, callback) {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();

        request.onreadystagechange = function () {
            if (this.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                const dataString = JSON.stringify(data);
                callback(undefine, data)l
            }

            if (this.readyState === 4 && request.status !== 200) {
                callback('Sth wrong', undefine);
            }
        };

        request.open("GET", '#API')
        request.withCredentials = true;
        request.send();
    })
}

getTodos(1).then(data => {
    console.log('get data: ', data)
})
    .catch(err => {
        console.log(err)
    })
