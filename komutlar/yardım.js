const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**__Eğlence ve Kullanıcı Komutları:__**", `\nntyçayiç = Çay İçersiniz. \nnty!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nnty!sunucuresmi = BOT Sunucunun Resmini Atar. \nnty!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nnty!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \nnty!espri = Rastgele Espri Gönderir. \nnty!sor <sorunuz> = Sorunuza Evet Hayır Belki cevapları verir. \nnty!taskağıtmakas = Taş Kağıt Makas Oynarsınız. \nnty!yazıtura = Yazı Tura Oynarsınız. \nnty!zekayaşım = Bot Zeka Yaşınızı Söyler.`)
  .addField("**__Sunucu Yetkilisi Komutları__**", `nty!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nnty!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nnty!unban = İstediğiniz Kişinin Yasağını Açar. \nnty!sustur = İstediğiniz Kişiyi Susturur.`)
  .addField("**__Botun Ana Komutları__**", "nty!yardım = Bot Komutlarını Atar. \nnty!bilgi = Bot Kendisi Hakkında Bilgi Verir. \nnty!ping = Bot Gecikme Süresini Söyler. \nntydavet = Bot Davet Linkini Atar. \nnty!istatistik = Bot İstatistiklerini Atar.")
  
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'nty!yardım [komut]'
};
