const express = require('express');       // import server
const socket = require('socket.io');      // import our websocket connection
const openai = require('openai');         // import openai
const max = require('max-api');           // DO NOT IMPORT. THIS IS HANDLED BY MAX NATIVELY

const app = express();                    // init server app
const server = app.listen(3000);          // listen to port 3000

app.use(express.static('public'));        // connect webserver to public folder

let io = socket(server);                  // connect socket io with server port 3000
console.log("opened server");

max.post('server says hi');


//hello openai
const config = new openai.Configuration({
  organization: "",
  apiKey: ""  
});

const openaiApi = new openai.OpenAIApi(config);   //connect openAi with config
max.post("hello openAi");

// here we define our api promt that gots attached to our "Question" that we ask Openai
let description = ' . Answer me the question in english in style of Edgar Alan Poe as a complete sentence with a maximum of 13 words. Each word should also include its word function.(e.g. noun, verb, article, pronoun and all others).  I only want barebone JSON no further explanation. And no Crediting and anything else. JUST JSON!!!!! Write me the answer in JSON that can be imported to p5js. Here is an example { "answer" : [{ "w": "I", "f": "pronoun"},{ "w": "like", "f": "verb"},{ "w": "summer", "f": "noun"},etc. }]}'

/*
we want the following format form openAI:

{
	"answer" : [ 		{
			"w" : "We",
			"f" : "pronoun"
		}
, 		{
			"w" : "love",
			"f" : "verb"
		}
, 		{
			"w" : "another",
			"f" : "pronoun"
		}
 ]
}
*/ 

const prompt = "Hello OpenApi. Why DOES music feel so good?";

io.sockets.on('connection', newConnection);


function newConnection(socketInc){
  max.post(socketInc.id);  

  socketInc.on('incomingPrompt', promptFromP5);

  function promptFromP5(data){
    max.post("received data from p5");
    askMe(data+description);
  }

  async function askMe(promptIn) {

    let completion = await openaiApi.createChatCompletion({
      "model": "gpt-3.5-turbo-0301",
      "messages" : [{"role" : "user", "content" : promptIn}]
    });

    let words ="";
    let functions ="";
    let rawReply = JSON.parse(completion.data.choices[0].message.content);



    for (let i = 0; i < rawReply.answer.length; i++){
      words = words + rawReply.answer[i].w + " ";
      functions = functions + rawReply.answer[i].f + " ";
    }
    
    // console.log(words);
    // console.log(functions);

    max.outlet('words_ '+words);
    max.outlet('functions_ '+functions);

  }

  max.addHandler("p5", fromMaxtoP5js);


  function fromMaxtoP5js(msg){
    max.post(msg);
    socketInc.emit('fromMax', msg);
  }

  //askMe(prompt);

}



