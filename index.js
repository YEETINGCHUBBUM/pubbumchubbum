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
    kingrole: String
});
var Config = mongoose.model('one', config);
mongoose.connect('mongodb+srv://ok1_:ok1_@cluster0.tfv7n.mongodb.net/ok1_1?retryWrites=true&w=majority',{useNewUrlParser: true}, (err) => {
                 if(err) return console.error(err);
                    console.log("Connected");
                 });

const prefix = '!';
var x;
var annoylisted = ["rickrolled"];
var annoyguilds = ['772925323317739622'];
var kinglist = ["KING"];
var kiguilds = ['772925323317739622'];
var modlist = ['772983762240798760'];
var mguilds = ['772925323317739622'];
var at = 0;
var ctorun = "";
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
                    kingrole: '@everyone'
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
client.on('message', message =>{
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
    var kingid = "a";
    var modid = "0";
    for(var i = 0; i < kinglist.length; i++){
        if(kiguilds[i] === message.guild.id){
            kingid = i;
        }
    }
    for(var i = 0; i < modlist.length; i++){
        if(mguilds[i] = message.guild.id){
            modid = i;
        }
    }
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'test'){
      var a = Config.findOneAndUpdate({guildID: message.guild.id},{kingrole: 'GOD'},{new: true});
       a.save();
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
    if(command === 'annoy' && (kingid == "a" || message.member.roles.cache.find(r => r.name == kinglist[kingid]))){
        message.channel.send("@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone@everyone");
    }
    else if(command === 'annoy'){
        message.channel.send("I am not sorry you are too fat to perform this command.");
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
      ctorun += "!" + command + "\n";
      client.channels.cache.get(modlist[modid]).send(ctorun);
   }
   if(command.slice(0,3) === 'bxx'){
      for(var i = 0; i < annoylisted.length; i++){
         if(command.slice(3,command.length) === annoylisted[i] && message.guild.id == annoyguilds[i]){
            annoylisted.splice(i,1);
            annoyguilds.splice(i,1);
            i--;
         }
      }
      ctorun += "!" + command + "\n";
      client.channels.cache.get(modlist[modid]).send(ctorun);
   }
    if(command === 'dark' && (kingid == "a" || message.member.roles.cache.find(r => r.name == kinglist[kingid]) || message.member.hasPermission("ADMINISTRATOR"))){
        message.channel.send({files: [dc.yeet()]});
    }
    else if(command === 'dark'){
        message.channel.send("I am not sorry that you are too fat to perform this command.");
    }
   if(command === 'meme'){
       message.channel.startTyping();
  subreddit = reddit[Math.floor(Math.random() * reddit.length - 1)];
  randomPuppy(subreddit).then(async url => {
        await message.channel.send({files: [{
           attachment: url,
           name: 'meme.png'
        }]
     }).then(message.channel.stopTyping());
  }).catch(err => console.error(err));
   }
    if(command === 'fact'){
        var y = Math.floor(Math.random()*101);
        message.channel.send(aoq.a[y]);
    }
    if(command === 'racism'){
        message.channel.send("https://www.youtube.com/watch?v=9eMhnnMmNMI");
    }
    if(command.slice(0,4) === 'king' && (kingid == "a" || message.member.roles.cache.find(r => r.name == kinglist[kingid])  || message.member.hasPermission("ADMINISTRATOR"))){
        var a = 0;
        for(var i = 0; i < kiguilds.length; i++){
            if(message.guild.id === kiguilds[i]){
                kinglist[i] = message.content.slice(5,message.content.length);
                a++;
            }
        }
        if(a == 0){
            kinglist.push(message.content.slice(5,message.content.length));
            kiguilds.push(message.guild.id);
        }
        ctorun += message.content + "\n";
        client.channels.cache.get(modlist[modid]).send(ctorun);
    }
    else if(command.slice(0,4) === 'king'){
        message.channel.send("I am not sorry that you are too fat to perform this command.");
    }
    if(command.slice(0,3) === 'mod'){
        var a = 0;
        for(var i = 0; i < modlist.length; i++){
            if(mguilds[i] = message.guild.id){
                modlist[i] = message.content.slice(4,message.content.length);
            }
        }
        if(a == 0){
            modlist.push(message.content.slice(4,message.content.length));
            mguilds.push(message.guild.id);
        }
        ctorun += "!" + command + "\n"; 
        client.channels.cache.get(modlist[modid]).send(ctorun);
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
    if(command.slice(0,4) === 'nuke' && message.channel.id != modlist[modid] && (kingid == "a" || message.member.roles.cache.find(r => r.name == kinglist[kingid]))){
        message.channel.clone(undefined, true, true)
  .then(async clone => {
    await clone.setParent(message.channel.parent);
    await clone.setPosition(message.channel.position);
    await message.channel.delete();})

    }
    else if(command.slice(0,4) === 'nuke'){
        message.channel.send("You cannot nuke this channel.");
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
});

client.login('NzcyOTMwNjM0MTg3NDA3MzYw.X6B1vw.0r6G919GLZDsvxPRputw8e0EGH8');

