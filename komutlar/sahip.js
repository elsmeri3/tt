const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:chicken: Sahip komutları**")
    .setColor("#15f153")
    .addField("s!eval", "Kod dener")
    .addField("s!load", "Yeni bir komut yükler")
    .addField("s!reboot", "Botu yeniden başlatır")
    .addField("s!reload", "Bir komutu yeniden başlatır")
    .addField("s!unload", "Bir komutu devre dışı bırakır")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sahipler'],
  permLevel: 0
};

exports.help = {
  name: 'sahip',
  description: 'Bütün sahip komutlarını verir.',
  usage: 'sahip'
};