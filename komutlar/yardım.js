const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '**Yenilikler**\n\n\n' + '\n !tavsiye = Bota tavsiyede bulunabilirsiniz.',
              '**YoutuberBot Komutları**\n\n\n' + '``-`` !havadurumu [şehir] = Hava Durumunu gösterir. \n``-`` !istatistik = Botun istatistiğini gisterir. \n``-`` !ping = Botun pingini gösterir. \n``-`` !sunucubilgi = Sunucu bilgilerini gösterir. \n``-`` !döviz [parabirimi] = Paraların Türkiyedeki fiyatlarını gösterir. \n``-`` !kullanıcıbilgim = Kendi bilgilerimizi söyler.(şifre-eposta hariç) ',
              '**Eğlence**\n\n\n' + '``-``  !avatarım = Kendinizin yada bir başkasının profil fotoğrafını almanıza yarar. \n``-`` !atatürk = Şanlı Atatürk ün giflerini atar. \n``-`` !wasted = Profil fotoğrafınıza wasted ekler. \n``-`` !simit = Simit yersiniz. \n``-`` !stresçarkı = Stresçarkı çevirirsiniz. \n``-`` !çayiç = Çay içersiniz. \n``-`` !kahveiç = Kahve içersiniz. \n``-`` !sor = Bota soru sorarsınız cevaplar. \n``-`` !düello [kişi] = İstediğiniz kişi ile düello yaparsınız. \n``-`` !espri = Bot espri yapar. \n``-`` !ascii [yaz] = Yazılarınız ascii olur.',
              '**Müzik**\n\n\n' + '``-``  !çal = Youtubeda İstediğiniz Bir Şarkıyı Aratır Ve Oynatır. \n``-``  !duraklat = Oynatılan Şarkıyı Devam Etmek Üzere Durdurur. \n``-``  !devam = Duraklatılan Şarkıyı Devam Ettir. \n``-``  !geç = Oynatılan Şarkıyı Geçer. \n',
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};