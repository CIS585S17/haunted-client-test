
// var socket = require('socket.io-client')('http://cslinux.cs.ksu.edu:5333')
let socket = require('socket.io-client')('http://localhost:5333')
socket.on('connect', function(){
  console.log("connected");
  // socket.emit('message', 'foobar');
  // socket.emit('get', 'get the game')
  socket.emit('host-game', 'game 1')
});
socket.on('event', function(data){
  console.log("event", data);
});
socket.on('disconnect', function(){
  console.log("disconnected");
});


socket.on('get-games', (game) => {
  console.log(game)
})
