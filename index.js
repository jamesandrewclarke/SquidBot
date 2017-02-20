const Discord = require('discord.js');

try {
  const config = require('./config.json');
} catch {
  const config = {};
  console.log("No config found");
}

const client = new Discord.Client();

const token = process.env.DISCORD_TOKEN || config.discord.token;

client.on('ready', function() {
  console.log("Bot ready");

  client.user.setGame('SquidBot');
});

client.login(token);
