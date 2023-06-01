const express = require('express');       // import server
const socket = require('socket.io');      // import our websocket connection
const openai = require('openai');         // import openai

const app = express();                    // init server app
const server = app.listen(3000);          // listen to port 3000

app.use(express.static('public'));        // connect webserver to public folder

let io = socket(server);                  // connect socket io with server port 3000
console.log("opened server");

//hello openai
const config = new openai.Configuration({
  organization: "org-qlE1mjGemCxstjMySxfjwIgH",
  apiKey: "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"  
});

const openaiApi = new openai.OpenAIApi(config);   //connect openAi with config
console.log("hello openAi");

const prompt = "Hello OpenApi. Why DOES music feel so good?";

io.sockets.on('connection', newConnection);


function newConnection(socketInc){
  console.log(socketInc.id);  

  socketInc.on('incomingPrompt', promptFromP5);

  function promptFromP5(data){
    console.log("received data from p5");
    askMe(data);
  }

  async function askMe(promptIn) {

    let completion = await openaiApi.createChatCompletion({
      "model": "gpt-3.5-turbo-0301",
      "messages" : [{"role" : "user", "content" : promptIn}]
    });

    console.log(completion.data.choices[0].message.content);
  }

  //askMe(prompt);

}



