const Discord = require('discord.js');

const config = require('./config.json');

const client = new Discord.Client();

client.on('ready', function() {
  console.log("Bot ready");

  client.user.setGame('SquidBot');
});

client.login(config.discord.token);
