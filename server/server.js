const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// serve frontend
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// socket logic
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // update user count
    updateClientCount();

    // receive message
    socket.on('msg', (data) => {
        io.emit('msg', {
            ...data,
            senderId: socket.id
        });
    });

    // typing indicator
    socket.on('typing', (name) => {
        socket.broadcast.emit('typing', name);
    });

    socket.on('stop-typing', () => {
        socket.broadcast.emit('stop-typing');
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        updateClientCount();
    });
});

function updateClientCount() {
    io.emit('client-count', io.sockets.sockets.size);
}

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
