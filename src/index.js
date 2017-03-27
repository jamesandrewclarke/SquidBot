const Discord = require('discord.js');

const client = new Discord.Client();

const config = require('./config.js');
const randomWord = require('./util/RandomWord.js');
const EmbedSchema = require('./util/EmbedSchema.js');

var mainChannel;

client.on('ready', function() {
  client.user.setGame(config.PRESENCE_MSG);
  mainChannel = client.channels.get(config.CHANNEL_ID);
});

client.on('message', function(message) {
  if (message.content.startsWith(`${config.COMMAND_PREFIX}cutescary`)) {
    message.channel.send(' ', {embed: EmbedSchema('Cute or scary?', `**${randomWord()}**`)})
  }
});

client.on('guildMemberAdd', function(member) {
  mainChannel.send(' ', {embed: EmbedSchema('Welcome, new member!', member.toString())})
});

client.on('guildMemberRemove', function(member) {
  mainChannel.send(' ', {embed: EmbedSchema('Sorry to see you go :(', member.toString())})
});

client.on('channelCreate', function(newChannel) {
  if (newChannel.type == 'text') {
      mainChannel.send(' ', {embed: EmbedSchema('New Text Channel', newChannel.toString())})
  }
});

client.login(config.TOKEN);
