const Discord = require('discord.js');

try {
  const config = require('./config.json');
} catch (e) {
  const config = {};
}

const client = new Discord.Client();

const token = process.env.DISCORD_TOKEN || config.discord.token;

client.on('ready', function() {
  client.user.setGame('SquidBot');
});

client.login(token);
