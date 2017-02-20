const Discord = require('discord.js');

try {
  const config = require('./config.json'); // eslint-disable-line no-unused-vars
} catch (e) {
  const config = {}; // eslint-disable-line no-unused-vars
}

const client = new Discord.Client();

const token = process.env.DISCORD_TOKEN || config.discord.token; // eslint-disable-line no-undef

client.on('ready', function() {
  client.user.setGame('SquidBot');
});

client.login(token);
