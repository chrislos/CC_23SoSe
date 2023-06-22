const express = require('express');   // express local server
const socket = require('socket.io');  // socket.io to connect node with p5js
const max = require('max-api');       // max api. Note this api should not be installed via npm. As soon as we open the script via [node ] object in max the api is linked to our code.

let app = express();                   // init express
let server = app.listen(3000);         // from now on app listens to 3000 and throws writes it result in server

app.use(express.static('public'));   // connecting our web server to "public" folder
max.post("server says hi");

let io = socket(server);            // bind socket to sever
io.sockets.on('connection', newConnection);       // open call back on new connection

function newConnection(socketInc) {  
  max.post('New id ' + socketInc.id);       // We found a new device (posted to max console)
  socketInc.on('sendBounce', sendBounceToMax);   // I establish a Listener, that fires as soon a mousePosition comes in.
  
  function sendBounceToMax(msg){
    max.post("received data from p5");      // post to our max console
    max.outlet(msg);
  }


  socketInc.on('mousePressed', sendMousetoMax);   // I establish a Listener, that fires as soon a mousePosition comes in.
 
  function sendMousetoMax(msg){
    max.post("received data from p5");      // post to our max console
    max.outlet(msg);
  } 

}






