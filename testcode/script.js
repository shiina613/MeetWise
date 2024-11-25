const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const startCallButton = document.getElementById('startCall');
const endCallButton = document.getElementById('endCall');
const toggleMicButton = document.getElementById('toggleMic');

let localStream;
let peerConnection;
let micEnabled = true;

const socket = new WebSocket('ws://localhost:8080');
const iceServers = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };

// Lấy video từ camera
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then((stream) => {
        localStream = stream;
        localVideo.srcObject = stream;
    })
    .catch((error) => console.error('Error accessing media devices.', error));

// Tạo kết nối WebRTC
function createPeerConnection() {
    const pc = new RTCPeerConnection(iceServers);

    localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));

    pc.ontrack = (event) => {
        remoteVideo.srcObject = event.streams[0];
    };

    pc.onicecandidate = (event) => {
        if (event.candidate) {
            socket.send(JSON.stringify({ candidate: event.candidate }));
        }
    };

    return pc;
}

// Xử lý tin nhắn từ signaling server
socket.onmessage = async (message) => {
    const data = JSON.parse(message.data);

    if (data.offer) {
        peerConnection = createPeerConnection();
        await peerConnection.setRemoteDescription(new RTCSessionDescription(data.offer));
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);
        socket.send(JSON.stringify({ answer }));
    } else if (data.answer) {
        await peerConnection.setRemoteDescription(new RTCSessionDescription(data.answer));
    } else if (data.candidate) {
        await peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
    }
};

// Nút bắt đầu cuộc gọi
startCallButton.addEventListener('click', async () => {
    peerConnection = createPeerConnection();
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    socket.send(JSON.stringify({ offer }));
    startCallButton.disabled = true;
    endCallButton.disabled = false;
});

// Nút kết thúc cuộc gọi
endCallButton.addEventListener('click', () => {
    peerConnection.close();
    peerConnection = null;
    remoteVideo.srcObject = null;
    startCallButton.disabled = false;
    endCallButton.disabled = true;
});

// Nút bật/tắt mic
toggleMicButton.addEventListener('click', () => {
    micEnabled = !micEnabled;
    localStream.getAudioTracks()[0].enabled = micEnabled;
    toggleMicButton.textContent = micEnabled ? 'Turn Off Mic' : 'Turn On Mic';
});
