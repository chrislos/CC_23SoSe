let express = require('express');
let app = express();
let server = app.listen(3000);      // from now on app listens to 3000 and throws writes it result in server

app.use(express.static('public'));   // connecting our web server to "public" folder
//console.log("server says hi");

// initalise npm via npn init
// npm install express

let socket = require('socket.io');
let io = socket(server);

io.sockets.on('connection', newConnection);


function newConnection(socket) {
  
  console.log(socket);   // We found a new device

}


