function showMeeting() {
    document.getElementById("meeting-box").style.display = "block";
    document.getElementById("document-box").style.display = "none";
    document.getElementById("employee-box").style.display = "none";
}


function showDocument() {
    document.getElementById("meeting-box").style.display = "none";
    document.getElementById("document-box").style.display = "block";
    document.getElementById("employee-box").style.display = "none";
}

function showEmployee() {
    document.getElementById("meeting-box").style.display = "none";
    document.getElementById("document-box").style.display = "none";
    document.getElementById("employee-box").style.display = "block";
}