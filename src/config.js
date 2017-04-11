var settings;

try { settings = require('../config.json'); } catch (e) { settings = {};}

const config = {
  TOKEN: process.env.DISCORD_TOKEN || settings.discord.token,
  CHANNEL_ID: process.env.CHANNEL || settings.discord.channel,
  COMMAND_PREFIX: ';',
  PRESENCE_MSG: process.env.PRESENCE_MSG || 'SquidBot | By Jamelele',
  GUILD_ID: process.env.GUILD_ID || settings.discord.guild_id
}

module.exports = config;
