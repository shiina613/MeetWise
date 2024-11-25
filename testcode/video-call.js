const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');

let localStream;
let peerConnection;

// Cấu hình ICE server
const iceServers = {
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
};

// Truy cập camera/micro
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then((stream) => {
        localStream = stream;
        localVideo.srcObject = stream;
    })
    .catch((error) => console.error('Error accessing media devices.', error));

// Thiết lập kết nối WebRTC
function createPeerConnection() {
    peerConnection = new RTCPeerConnection(iceServers);

    // Thêm stream vào peer connection
    localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));

    // Nhận stream từ remote
    peerConnection.ontrack = (event) => {
        remoteVideo.srcObject = event.streams[0];
    };

    return peerConnection;
}
