
// var socket = require('socket.io-client')('ws://cslinux.cs.ksu.edu:2000');
let socket = require('socket.io-client')('http://localhost:5000')
socket.on('connect', function(){
  console.log("connected");
  socket.emit('message', 'foobar');
  // socket.emit('get', 'get the game')
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
