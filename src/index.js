const chalk = require('chalk');
const Discord = require('discord.js');
const fs = require('fs');

const nounlist = fs.readFileSync('./nounlist.txt').toString().split('\n');

function randomWord() { 
  return nounlist[Math.floor(Math.random() * nounlist.length)];
}

var config;

try { config = require('../config.json'); } catch (e) { config = {};}

const client = new Discord.Client();

const TOKEN = process.env.DISCORD_TOKEN || config.discord.token;
const CHANNEL_ID = process.env.CHANNEL || config.discord.channel;

client.on('ready', function() {
  client.user.setGame('SquidBot | By Jamelele');
  chalk.green('Bot ready');
});

client.on('message', function(message) {
  if (message.content.startsWith('!cutescary')) {
    message.reply(`Cute or scary? \`${randomWord()}\``); // eslint-disable-line quotes
  }
});

client.on('guildMemberAdd', member => {
  const channel = client.channels.get(CHANNEL_ID);
  channel.sendMessage(`Welcome, ${member}!`);
});

client.login(TOKEN);
