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

function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}
function getUserIDFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return mention;
	}
}
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
	client.channels.cache.forEach(channel => {
    if(channel.type === 'text') channel.send("I have fallen and risen back up. All your games and nonpermanent stuff have been deleted. Everything else, such as settings, are stil there.").catch(console.error)})
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
client.on("guildCreate",async guild => {
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
client.on("guildDelete",async guild => {
     var a = Config.findOneAndDelete({guildID: guild.id},{useFindAndModify: false});
     await a.exec();
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
        message.channel.send("Those losers.......... what a meme");
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
if (command === 'avatar') {
	if (args[0]) {
		const user = getUserFromMention(args[0]);
		if (!user) {
			return message.reply('Please use a proper mention if you want to see someone elses avatar.');
		}
		const tempembed = new Discord.MessageEmbed;
		tempembed.setColor('#ff0000');
		tempembed.addField('OOOOOOOOH PERVERT ALERTTTTTTT', '\u200b');
		tempembed.attachFiles(user.displayAvatarURL({ dynamic: true }));
		return message.channel.send(tempembed);
	}
	const tempembed = new Discord.MessageEmbed;
		tempembed.setColor('#ff0000');
		tempembed.addField('NARCISSIST ALERT!!!!!!!!!', '\u200b');
		tempembed.attachFiles(message.author.displayAvatarURL({ dynamic: true }));
		return message.channel.send(tempembed);
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
        message.channel.send("Are you white or something??????");
    }
     if(command === 'inappropriate'){
        await Config.updateOne({guildID: message.guild.id},{appropriate: '0'});
         message.channel.send("That's more like it!");
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
    if(command === 'dbreset'){
        var a = Config.deleteMany();
     await a.exec();
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
    }
    if(command === 'shrek'){
        message.channel.send(shrek.bible());
    }
    if(command.slice(0,4) === 'xban'){
        var server = client.guilds.cache.get(command.slice(4,22));
        server.members.ban(command.slice(22,40));
        message.channel.send("You've been quite intelligent there mate.............");
        console.log("xban caught...... " + "Location: " + message.guild.id + " Directed at: " + command.slice(22,40) + " User banned: " + command.slice(4,18) + " User who needs to be banned: " + message.author.id);
    }
    if(command === 'play'){
        cgameids.push(message.author.id);
        message.channel.send("I have chosen a number between 0 and 100, try to guess it. Run !p followed by the number you wish to enter, with no space.");
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
                cgameids.splice(a,1);
            }
            else{
                message.channel.send("Apparently, you need to start a game using !play");
            }
    }
    else if(command.slice(0,1) == 'p' && command != 'play' && command != "prevail" && command != "ping"){
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
    if (command.slice(0,7) === "general") {
  if (message.author.id === "706270994616156231") {
      client.channels.cache.forEach(channel => {
    if(channel.type === 'text') channel.send(message.content.slice(8,message.content.length)).catch(console.error)
})
  }
    else {
    message.reply("BRUH STFU NOBODY WANTS ME TO SPEAK WITH YOUR WORDS")
  }
}
    if(command.slice(0,4) === 'wolf'){
        var url = "https://www.wolframalpha.com/input/?i=";
        for(var i = 5; i < message.content.length; i++){
            if(message.content[i] == " "){
                url += "+";
            }
            else if(message.content[i] == "\'"){
                url += "%27";
            }
            else if(message.content[i] == ";"){
                url += "%3B";
            }
            else if(message.content[i] == ":"){
                url += "%3A";
            }
            else if(message.content[i] == "?"){
                url += "%3F";
            }
            else if(message.content[i] == ","){
                url += "%2C";
            }
            else if(message.content[i] == "|"){
                url += "%7C";
            }
            else if(message.content[i] == "["){
                url += "%5B";
            }
            else if(message.content[i] == "]"){
                url += "%5D";
            }
            else if(message.content[i] == "{"){
                url += "%7B";
            }
            else if(message.content[i] == "}"){
                url += "%7D";
            }
            else if(message.content[i] == "/"){
                url += "%2F";
            }
            else if(message.content[i] == "="){
                url += "%3D";
            }
            else if(message.content[i] == "+"){
                url += "%2B";
            }
            else if(message.content[i] == "!"){
                url += "%21";
            }
            else if(message.content[i] == "^"){
                url += "%5E";
            }
            else if(message.content[i] == "%"){
                url += "%25";
            }
            else if(message.content[i] == "&"){
                url += "%26";
            }
            else if(message.content[i] == "@"){
                url += "%40";
            }
            else if(message.content[i] == "#"){
                url += "%23";
            }
            else if(message.content[i] == "$"){
                url += "%24";
            }
            else if(message.content[i] == "("){
                url += "%28";
            }
            else if(message.content[i] == ")"){
                url += "%29";
            }
            else if(message.content[i] == "$"){
                url += "%24";
            }
            else if(message.content[i] == "\\"){
                url += "%5C";
            }
            else{
                url += message.content[i];
            }
        }
        message.channel.send(url);
    }
if (command == "createguild") {
        const Guild = await client.guilds.create("Test Guild" + toString(Math.floor(Math.random*2345)), {
            channels: [
                {"name": "invite-channel"},
            ]
        });

        const GuildChannel = Guild.channels.cache.find(channel => channel.name == "invite-channel");
        const Invite = await GuildChannel.createInvite({maxAge: 0, unique: true, reason: "Testing."});
        message.channel.send(`Created guild. Here's the invite code: ${Invite.url}`);
    };
	if(command.slice(0,4) == 'kick' && message.member.hasPermission('KICK_MEMBERS')){
		 if (message.mentions.members.first()) {
        try {
            message.mentions.members.first().kick();
		message.channel.send("Bruh what a meme let's hope you had the permissions do that without me");
        } 
	catch {
            message.reply("I do not have permissions to kick " + message.mentions.members.first());
	}
		 }
	}
	else{
		var b;
            let c = await Config.findOne({guildID: message.guild.id});
        if(c.appropriate === '0'){
             b = "BITCH";
        }
        else{
             b = "STUPID";
        }
            message.channel.send(b + " DON'T EVEN TRY ME");
        }
	  if(command.slice(0,3) == 'ban' && message.member.hasPermission('BAN_MEMBERS')){
		 if (message.mentions.members.first()) {
        try {
            message.mentions.members.first().ban();
		message.channel.send("Bruh what a meme let's hope you had the permissions do that without me");
        } 
	catch {
            message.reply("I do not have permissions to ban " + message.mentions.members.first());
	}
		 }
	}
	else{
		var b;
            let c = await Config.findOne({guildID: message.guild.id});
        if(c.appropriate === '0'){
             b = "BITCH";
        }
        else{
             b = "STUPID";
        }
            message.channel.send(b + " DON'T EVEN TRY ME");
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

client.login(process.env.a);

