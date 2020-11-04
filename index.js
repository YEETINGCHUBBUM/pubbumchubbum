const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!';
var x;
var annoylisted = ["rickrolled"];
var anew = "";
var at = 0;
client.on('message', async message =>{
   if (message.channel.type == "dm") {
        message.author.send("I'm ignoring your pathetic little human account.");
    }
   /*for(var i in annoylisted){
      if(message.content.toLowerCase().includes(annoylisted[i])){
         at++;
      }
   }*/
   /*if(at > 0){
      message.channel.send("@everyone Oh my god the op person has said the op words.");
      at = 0;
   }*/
})
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'ping'){
        message.channel.send('pong!');
    }
    if(command === 'cringe'){
      message.channel.send("Yeet", {files: ["cringe.png"]});
    }
    if(command === 'yeet'){
        message.channel.send("The Yeet Gods bless you with 5+ Karma.");
    }
    if(command === 'annoy' && message.member.roles.cache.find(r => r.name === "KING")){
        message.channel.send("@everyone");
    }
    if(command === 'suicide'){
      x = Math.random()
        if(x < 0.25){
            message.channel.send("The knives are in the kitchen.", {files: ["death.png"]});
        }
        else if(x < 0.5){
            message.channel.send("The medicine is in the cabinet.", {files: ["death.png"]});
        }
        else if(x < 0.75){
            message.channel.send("The car is in the driveway.", {files: ["death.png"]});
        }
        else if(x < 1){
            message.channel.send("The tide pods are in the bathroom.", {files: ["death.png"]});
        }
    }
    if(command === 'me'){
        message.author.send("https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLahKLy8pQdCM0SiXNn3EfGIXX19QGzUG3");
    }
   if(command[0] === 'a' && command[1] === 'x' && command[2] === 'x'){
      anew = "";
      for(var i = 3; i < command.length, i++){
         anew += command[i];
      }
      annoylisted.push(anew);
   }
});

client.login('NzcyOTMwNjM0MTg3NDA3MzYw.X6B1vw.0r6G919GLZDsvxPRputw8e0EGH8');

