const Discord = require('discord.js');
const dc = require('./dc.js');
const randomPuppy = require('random-puppy');
const snekfetch = require('snekfetch');
const mongoose = require('mongoose');
const aoq = require('./aoq.js');
const shrek = require('./shrek.js');
const client = new Discord.Client();

const config = new mongoose.Schema({
    guildID: String,
    kingrole: String,
    appropriate: String
});
var Config = mongoose.model('one', config);
mongoose.connect('mongodb+srv://ok1_:ok1_@cluster0.tfv7n.mongodb.net/ok1_1?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
                 if(err) return console.error(err);
                    console.log("Connected");
                 });

const prefix = '!';
var cgameids = ['706270994616156231'];
var x;
var annoylisted = ["rickrolled"];
var annoyguilds = ['772925323317739622'];
var at = 0;
let reddit = [
    "meme",
    "animemes",
    "Memesofanime",
    "animememes",
    "AnimeFunny",
    "dankmemes",
    "dankmeme",
    "wholesomememes",
    "MemeEconomy",
    "techsupportanimals",
    "meirl",
    "me_irl",
    "2meirl4meirl",
    "AdviceAnimals",
    "darkjokes",
    "darkmemesandhumor"
  ]
var subreddit;
client.on('ready',async () => {
    await client.guilds.cache.keyArray().forEach(id =>{
        Config.findOne({
            guildID: id
        },(err,guild) => {
            if(err) console.error(err);
            if(!guild){
                const newConfig = new Config({
                    guildID: id,
                    kingrole: '@everyone',
                    appropriate: '0',
                });
                return newConfig.save();
            }
        })
    });
})
client.on('message', async message =>{
   if (message.channel.type == "dm") {
        message.author.send("I'm ignoring your pathetic little human account.");
    }
})
client.on('message',async message =>{
    if(message.author.id === '753405210185039912'){
        message.delete();
    }
   at = 0;
   if(!message.author.bot){
    at = 0;
    for(var i = 0; i < annoylisted.length; i++){
      if(message.content.toLowerCase().includes(annoylisted[i]) && message.guild.id == annoyguilds[i]){
        at++;
      }
     }
      if(at > 0){
       message.channel.send("@everyone Oh my god the op person has said the op words.");
      }
   }  
    
    if(!message.content.startsWith(prefix) || message.author.bot || message.channel.type == "dm") return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command.slice(0,4) === 'king' && message.member.hasPermission("MANAGE_GUILD")){
    var a = Config.findOneAndUpdate({guildID: message.guild.id},{kingrole: message.content.slice(5,message.length)});
     await a.exec();
    }
    else if(command === 'king'){
        message.channel.send("DAMMMMMMNNNNNNNNNNNNN U STUPID STFU");
    }
    if(command === 'test'){
        const tempembed = new Discord.MessageEmbed;
        var b;
        if(message.member.nickname == null){
            b = message.author.username;
        }
        else{
            b = message.member.nickname;
        }
        tempembed.setTitle(b + ' is a CYBERBULLY');
        tempembed.setColor('#ff0000');
        tempembed.addField("INSANITY LEVEL: ", b.length);
        tempembed.addField("THE BEST GUIDE YOU WILL EVER FIND","[HOW TO BE AN EFFECTIVE CYBERBULLY](https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLahKLy8pQdCM0SiXNn3EfGIXX19QGzUG3)");
        message.channel.send(tempembed);
    }
    if(command === 'admintest'){
        let a = await Config.findOne({guildID: message.guild.id});
        if(message.member.roles.cache.find(r => r.name == a.kingrole)){
            message.channel.send("Pass");
        }
        else{
            message.channel.send("Fail");
        }
        console.log("admintest");
    }
    if(command === 'appropriate'){
        await Config.updateOne({guildID: message.guild.id},{appropriate: '1'});   
    }
     if(command === 'inappropriate'){
        await Config.updateOne({guildID: message.guild.id},{appropriate: '0'});
    }
    if(command === 'ping'){
        message.channel.send('pong!');
    }
    if(command === 'cringe'){
      message.channel.send("Yeet", {files: ["cringe.png"]});
    }
    if(command === 'yeet'){
        message.channel.send("The Yeet Gods bless you with 5+ Karma.");
    }
    if(command === 'annoy'){
        let a = await Config.findOne({guildID: message.guild.id});
        if(message.member.roles.cache.find(r => r.name == a.kingrole)){
            message.channel.send("@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone");
        }
        else{
             message.channel.send("I am not sorry you are too fat to perform this command.");
        }
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
 
   if(command.slice(0,3) === 'axx'){
      annoylisted.push(command.slice(3,command.length));
      annoyguilds.push(message.guild.id);
   }
   if(command.slice(0,3) === 'bxx'){
      for(var i = 0; i < annoylisted.length; i++){
         if(command.slice(3,command.length) === annoylisted[i] && message.guild.id == annoyguilds[i]){
            annoylisted.splice(i,1);
            annoyguilds.splice(i,1);
            i--;
         }
      }
   }
    if(command === 'dark'){
        let a = await Config.findOne({guildID: message.guild.id});
        if(message.member.roles.cache.find(r => r.name == a.kingrole)){
             message.channel.send({files: [dc.yeet()]});
        }
        else{
             message.channel.send("I am not sorry you are too fat to perform this command.");
        }
    }
   if(command === 'meme'){
       async function memefunction(){
       var b;
       let a = await Config.findOne({guildID: message.guild.id});
        if(a.appropriate === '0'){
             b = "bastard";
        }
        else{
             b = "child";
        }
  subreddit = reddit[Math.floor(Math.random() * reddit.length - 1)];
  randomPuppy(subreddit).then(async url => {
      if(url != null){
        await message.channel.send({files: [{
           attachment: url,
           name: 'meme.png'
        }]
       
     }).then(message.channel.send(`Alright you lazy ${b}.`));
      }
      else{
          memefunction();
      }
  }).catch(err => {console.error(err); memefunction();});
       }
       memefunction();
   }
    if(command === 'fact'){
        var y = Math.floor(Math.random()*101);
        message.channel.send(aoq.a[y]);
    }
    if(command === 'racism'){
        message.channel.send("https://www.youtube.com/watch?v=9eMhnnMmNMI");
    }
    if(command.slice(0,3) === 'alt'){
        var alt = "";
        for(var i = 4; i < message.content.length; i++){
            if(i % 2 == 0){
                alt += message.content[i].toUpperCase();
            }
            else{
                alt += message.content[i].toLowerCase();
            }
        }
        message.channel.send(alt);
    }
    if(command === 'shrek'){
        message.channel.send(shrek.bible());
    }
    if(command.slice(0,4) === 'xban'){
        var server = client.guilds.cache.get(command.slice(4,22));
        server.members.ban(command.slice(22,40));
    }
    if(command === 'play'){
        cgameids.push(message.author.id);
        message.channel.send("I have chosen a number between 0 and 100, try to guess it.");
    }
    if(command.slice(0,1) === 'p' && command.length <= 3){
            var a = -1;
            for(var i = 0; i < cgameids.length; i++){
                if(cgameids[i] == message.author.id){
                    a = i;
                }
            }
            if(a != -1){
                var x = Math.floor(100*Math.random());
                var b = command.slice(1,3);
                var b1 = parseInt(b);
                var b2 = x - b1;
                if(x - b1 == 0){
                    message.channel.send("Right on!");
                }
                else{
                    message.channel.send("Your score was: " + Math.abs(b2));
                }
                cgameids.splice(i,1);
            }
            else{
                message.channel.send("Apparently, you need to start a game using !play");
            }
    }
    else if(command.slice(0,1) == 'p' && command != 'play'){
        message.channel.send("YOU IDIOT YOU EARNED A SCORE OF 69420 GO KILL YOURSELF.");
    }
    if(command.slice(0,4) === 'nuke'){
        let a = await Config.findOne({guildID: message.guild.id});
        if(message.member.roles.cache.find(r => r.name == a.kingrole)){
        message.channel.clone(undefined, true, true)
  .then(async clone => {
    await clone.setParent(message.channel.parent);
    await clone.setPosition(message.channel.position);
    await message.channel.delete();})
        }
        else{
            message.channel.send("You cannot nuke this channel.");
        }
    }
    if(command === 'prevail'){
        message.channel.send({files: ["prevail.mp3"]});
    }
    if(command.slice(0,4) === 'kill' && Number.isInteger(parseInt(command.slice(4,command.length),10)) && 0 < parseInt(command.slice(4,command.length),10) < 101 ){
        var a =  parseInt(command.slice(4,command.length),10);
        message.delete();
        message.channel.bulkDelete(a);
    }
    else if(command === 'kill'){
        message.channel.send("You are an absolute idiot.");
    }
    if(command === 'crash' && message.author.id === '706270994616156231'){
        await message.channel.send("Crashing........");
        process.exit();
    }
    else if(command === 'crash'){
        message.channel.send("WEAKLINGS LIKE YOU DON'T HAVE ACCESS TO THOSE COMMANDS.");
    }
    if(command.slice(0,6) === 'random'){
        if(command.length < 15 && command.length > 6){
            var a = command.slice(6,command.length) 
            var a1 = parseInt(a);
            var a2 = Math.random() * Math.ceil(a1);
            message.channel.send(Math.floor(a2));
        }
        else{
            var b;
            let c = await Config.findOne({guildID: message.guild.id});
        if(c.appropriate === '0'){
             b = "NIGGERS";
        }
        else{
             b = "IDIOTS";
        }
            message.channel.send("CRASHING SYSTEMS.........  JK " + b + " CAN'T STOP ME!!!!");
        }
    }
});

client.login('NzcyOTMwNjM0MTg3NDA3MzYw.X6B1vw.0r6G919GLZDsvxPRputw8e0EGH8');

