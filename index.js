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
    if(command.slice(0,4) === 'test' && message.member.hasPermission("MANAGE_GUILD")){
    var a = Config.findOneAndUpdate({guildID: message.guild.id},{kingrole: message.content.slice(5,message.length)});
     await a.exec();
    }
    else if(command === 'test'){
        message.channel.send("DAMMMMMMNNNNNNNNNNNNN U STUPID STFU");
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
       function memefunction(){
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
  }).catch(err => console.error(err));
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
});

client.login('NzcyOTMwNjM0MTg3NDA3MzYw.X6B1vw.0r6G919GLZDsvxPRputw8e0EGH8');

