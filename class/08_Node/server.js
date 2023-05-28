console.log("hello world");

let express = require('express'); 

let app = express();
let server = app.listen(3000);

app.use(express.static('public'));

let socket = require('socket.io');
let io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  
  console.log(socket.id);   // We found a new device


  socket.on('mouse', mouseMsg);

  function mouseMsg(msg){
    
    //console.log(msg);

    socket.broadcast.emit('serverMouse', msg);

  }


}


