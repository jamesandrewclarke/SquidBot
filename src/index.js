const Discord = require('discord.js');

const client = new Discord.Client();

const config = require('./config.js');
const randomWord = require('./util/RandomWord.js');

var mainChannel;

client.on('ready', function() {
  client.user.setGame(config.PRESENCE_MSG);
  mainChannel = client.channels.get(config.CHANNEL_ID);
});

client.on('message', function(message) {
  if (message.content.startsWith(`${config.COMMAND_PREFIX}cutescary`)) {
    message.channel.send(`Cute or scary? **${randomWord()}**`); // eslint-disable-line quotes
  }
});

client.on('guildMemberAdd', function(member) {
  mainChannel.sendMessage(`Welcome, ${member}!`);
});

client.on('guildMemberRemove', function(member) {
  mainChannel.sendMessage(`Goodbye, ${member}! Sorry to see you go :(`);
});

client.on('channelCreate', function(newChannel) {
  if (newChannel.type == 'text') {
      mainChannel.sendMessage(`**New text channel created:** ${newChannel}`);
  }
});

client.login(config.TOKEN);
