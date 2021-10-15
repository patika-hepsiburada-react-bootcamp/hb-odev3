const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
  res.end('realtime colors app');
});


const votes={
js:0,
go:0,
c:0,
java:0,
};




 
  

 // socket.broadcast.emit();//bağlantıyı açan kişi hariç herkese veri gider
  // socket.emit(); sadece bağlantıyı açan kişiye veri gider
  io.emit('new-vote',votes) //herkese veri gider
  console.log(votes);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('new-vote', (vote) => {
    console.log('New Vote',vote);
    votes[vote]+=1;
   });
  socket.on('disconnect', () => console.log('a user disconnected'));
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
