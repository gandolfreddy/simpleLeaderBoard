const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);


const randomEmoji = ["🥗", "🍟", "🍔"];
let playerList = [];


function refineRawData(rawData) {
    playerList = rawData.split('\n');
    let len = playerList.length;
    for (let i = 0; i < len; i++)
        playerList[i] = {
            no: i,
            emoji: randomEmoji[i % randomEmoji.length],
            name: playerList[i],
            point: 0,
            color: 'rgb(69, 69, 69)',
        };
    return;
}

function updatePoints(player) {
    for (let i = 0; i < playerList.length; i++) {
        if (`${playerList[i].emoji} ${playerList[i].name}` === player.name) {
            playerList[i].point += player.point;
            playerList[i].point = (playerList[i].point < 0) ? 0 : playerList[i].point;
            playerList[i].point = (playerList[i].point > 650) ? 650 : playerList[i].point;
            return;
        }
    }
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/supervisor-admin', (req, res) => {
    res.sendFile(__dirname + '/admin.html');
});

io.on('connection', (socket) => {
    io.emit("player-list", playerList);

    socket.on('receive-player-list', (rawData) => {
        refineRawData(rawData);
        io.emit("player-list", playerList);
    });

    socket.on("player-point", (player) => {
        updatePoints(player);
        io.emit("player-list", playerList);
    });

    socket.on("clicked-player-list", (players) => {
        playerList = players;
        io.emit("player-list", playerList);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});