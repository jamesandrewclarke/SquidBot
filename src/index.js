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
  } else if (message.content.startsWith(`${config.COMMAND_PREFIX}qwote`)) {
    message.channel.send('```Qwote: bleave in your self and you will be unstoppaball``` - *Pink hair dumb girl*');
  }

  if (message.author.id == '157993371070234624') {
    message.react('👌');
  }
});

client.on('guildMemberAdd', function(member) {
  mainChannel.send(' ', {
    embed: new EmbedSchemas.MemberJoin(member).get()
  });
});

client.on('guildMemberRemove', function(member) {
  mainChannel.send(' ', {
    embed: new EmbedSchemas.MemberLeave(member).get()
  });
});

client.on('channelCreate', function(newChannel) {
  if (newChannel.type == 'text') {
      mainChannel.send(' ', {
        embed: new EmbedSchemas.EmbedSchema('New Text Channel', newChannel.toString()).get()
      });
  }
});

client.on('voiceStateUpdate', function(oldMember, newMember) {
  if (oldMember.voiceChannelID != newMember.voiceChannelID) {
    const guild = client.guilds.get(config.GUILD_ID);

    const oldRoleName = `voicetext-${oldMember.voiceChannelID}`;
    const newRoleName = `voicetext-${newMember.voiceChannelID}`;

    const newRole = guild.roles.find('name', newRoleName);
    const oldRole = guild.roles.find('name', oldRoleName);

    const user = guild.members.get(newMember.id);

    if (newRole) {
      user.addRole(newRole);
    }

    if (oldRole) {
      user.removeRole(oldRole);
    }
  }
});

client.login(config.TOKEN);
