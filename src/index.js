const Discord = require('discord.js');

var config;

try {
  config = require('../config.json');
} catch (e) {
  config = {};
}

const client = new Discord.Client();

const token = process.env.DISCORD_TOKEN || config.discord.token; 

client.on('ready', function() {
  client.user.setGame('SquidBot');
});

client.login(token);
