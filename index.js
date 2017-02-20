const Discord = require('discord.js');
const config = require('./config.json') || {};

const client = new Discord.Client();

const token = process.env.DISCORD_TOKEN || config.discord.token;

client.on('ready', function() {
  console.log("Bot ready");

  client.user.setGame('SquidBot');
});

client.login(token);
