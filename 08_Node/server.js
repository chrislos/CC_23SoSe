let express = require('express');
let app = express();
let server = app.listen(3000);      // from now on app listens to 3000 and throws writes it result in server

app.use(express.static('public'));   // connecting our web server to "public" folder
console.log("server says hi");

// initalise npm via npn init
// npm install express

let socket = require('socket.io');
let io = socket(server);

io.sockets.on('connection', newConnection);


function newConnection(socket) {
  
  console.log('New id ' + socket.id);   // We found a new device
  socket.on('mousePosition', mouseMsg); // I establish a Listener, that fires as soon a mousePosition comes in.
  
  function mouseMsg(msg){
    //console.log(msg);
    socket.broadcast.emit('serverMousePos', msg); // send to all excluding my  socket from which I received the input
    //sockets.io.emit('serverMousePos', msg); send to all including myself by using global sockets variable
  }

}


