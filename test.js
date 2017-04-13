
var socket = require('socket.io-client')('ws://cslinux.cs.ksu.edu:5000');
socket.on('connect', function(){
  console.log("connected");
  socket.emit('message', 'foobar');
});
socket.on('event', function(data){
  console.log("event", data);
});
socket.on('disconnect', function(){
  console.log("disconnected");
});
