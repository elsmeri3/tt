const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  '**Bot Sunucuya Eklendi',
  '**SwetnesBot** sunucunuzdaki insanlara kolaylıklar sağlar.',
  'Bot Her Türlü Komudu Vardır'

  ]