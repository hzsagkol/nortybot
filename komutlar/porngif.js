const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  var sans = ["http://m.YollaYap.com/bbtc/1523730340919.gif", "http://m.YollaYap.com/bbtc/1523730494880.gif", "http://m.YollaYap.com/bbtc/1523730564376.gif"];
  var sonuc = sans[Math.floor((Math.random() * sans.length))];
  const embed = new Discord.RichEmbed()
  .setImage(`${sonuc}`)
  .setColor("RANDOM")
  return message.channel.sendEmbed(embed);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'porngif',
  description: '',
  usage: 'nty!porngif'
};