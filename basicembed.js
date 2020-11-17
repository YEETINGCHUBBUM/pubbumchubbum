var discord = require('discord.js');
let basicembed = new Discord.MessageEmbed(){
  title: message.member.nickname + 'is a CYBERBULLY',
  color: 0xFF0000;
}
module.exports.trollembed = basicembed;
