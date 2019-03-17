const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   var cevaplar = ['https://cdn.discordapp.com/attachments/456811330083487756/548815689188769823/giphy.gif','https://cdn.discordapp.com/attachments/456811330083487756/548816716382339082/giphy_2.gif',
   'https://cdn.discordapp.com/attachments/456811330083487756/548816848410509312/giphy_1.gif','https://cdn.discordapp.com/attachments/456811330083487756/548815711661981698/s-187916476433408d027f25a4d3b321f01b585745.gif' ];
   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
   message.reply(cevap);
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['kahveic', 'kahveiç','Kahveic'],
 permLevel: 0 ,
};

exports.help = {
 name: 'kahveiç',
 description: 'Sıcacık.',
 usage: 'kahve'
};