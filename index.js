const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!';
var x;
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
    if(command === 'annoy' && message.member.roles.has(772926781996924970)){
        message.channel.send("@everyone");
    }
    if(command === 'suicide'){
      x = Math.random()
        if(x < 0.25){
            message.channel.send("The knives are in the kitchen");
        }
        else if(x < 0.5){
            message.channel.send("The medicine is in the cabinet.");
        }
        else if(x < 0.75){
            message.channel.send("The car is in the driveway.");
        }
        else if(x < 1){
            message.channel.send("The tide pods are in the bathroom.");
        }
    }
});

client.login('NzcyOTMwNjM0MTg3NDA3MzYw.X6B1vw.0r6G919GLZDsvxPRputw8e0EGH8');

