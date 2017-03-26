const Discord = require('discord.js');
const fs = require('fs');

const nounlist = fs.readFileSync('./nounlist.txt').toString().split('\n');

const client = new Discord.Client();

const config = require('./config.js');

function randomWord() {
  return nounlist[Math.floor(Math.random() * nounlist.length)];
}

client.on('ready', function() {
  client.user.setGame(config.PRESENCE_MSG);
});

client.on('message', function(message) {
  if (message.content.startsWith(`${config.COMMAND_PREFIX}cutescary`)) {
    message.channel.send(`Cute or scary? **${randomWord()}**`); // eslint-disable-line quotes
  }
});

client.on('guildMemberAdd', function(member) {
  const channel = client.channels.get(config.CHANNEL_ID);
  channel.sendMessage(`Welcome, ${member}!`);
});

client.on('guildMemberRemove', function(member) {
  const channel = client.channels.get(config.CHANNEL_ID);
  channel.sendMessage(`Goodbye, ${member}! Sorry to see you go :(`);
});

client.login(config.TOKEN);
