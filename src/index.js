const Discord = require('discord.js');
const fs = require('fs');

const nounlist = fs.readFileSync('./nounlist.txt').toString().split('\n');

const client = new Discord.Client();

const TOKEN = process.env.DISCORD_TOKEN || config.discord.token;
const CHANNEL_ID = process.env.CHANNEL || config.discord.channel;
const COMMAND_PREFIX = '-';
const PRESENCE_MSG = process.env.PRESENCE_MSG || 'SquidBot | By Jamelele';

var config;

try { config = require('../config.json'); } catch (e) { config = {};}

function randomWord() {
  return nounlist[Math.floor(Math.random() * nounlist.length)];
}

client.on('ready', function() {
  client.user.setGame(PRESENCE_MSG);
});

client.on('message', function(message) {
  if (message.content.startsWith(`${COMMAND_PREFIX}cutescary`)) {
    message.channel.send(`Cute or scary? **${randomWord()}**`); // eslint-disable-line quotes
  }
});

client.on('guildMemberAdd', function(member) {
  const channel = client.channels.get(CHANNEL_ID);
  channel.sendMessage(`Welcome, ${member}!`);
});

client.on('guildMemberRemove', function(member) {
  const channel = client.channels.get(CHANNEL_ID);
  channel.sendMessage(`Goodbye, ${member}! Sorry to see you go :(`);
});

client.login(TOKEN);
