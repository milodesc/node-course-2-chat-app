const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('connection made!');

    socket.emit('newEmail', {
        from: 'mike@example.com',
        message: 'hi',
        createdAt: 123
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected. :(');
    });

    socket.emit('newMessage', {
        from: "pat",
        text: "test",
        createdAt: new Date()
    });

    socket.on('createMessage', (message) => {
        console.log('create message:', message);
    });
});

server.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});
