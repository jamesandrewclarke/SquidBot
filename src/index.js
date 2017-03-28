const Discord = require('discord.js');

const client = new Discord.Client();

const config = require('./config.js');
const randomWord = require('./util/RandomWord.js');
const EmbedSchemas = require('./util/embeds/index.js');

var mainChannel;

client.on('ready', function() {
  client.user.setGame(config.PRESENCE_MSG);
  mainChannel = client.channels.get(config.CHANNEL_ID);
});

client.on('message', function(message) {
  if (message.content.startsWith(`${config.COMMAND_PREFIX}cutescary`)) {
    message.channel.send(' ', {
      embed: new EmbedSchemas.CuteScary(randomWord()).get()
    });
  }
});

client.on('guildMemberAdd', function(member) {
  mainChannel.send(' ', {embed: new EmbedSchemas.MemberJoin(member).get()})
});

client.on('guildMemberRemove', function(member) {
  mainChannel.send(' ', {embed: new EmbedSchemas.MemberLeave(member).get()})
});

client.on('channelCreate', function(newChannel) {
  if (newChannel.type == 'text') {
      mainChannel.send(' ', {embed: new EmbedSchemas.EmbedSchema('New Text Channel', newChannel.toString()).get()})
  }
});

client.login(config.TOKEN);
