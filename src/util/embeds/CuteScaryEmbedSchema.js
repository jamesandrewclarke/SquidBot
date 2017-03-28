const EmbedSchema = require('./EmbedSchema.js');

class CuteScaryEmbedSchema extends EmbedSchema {
  constructor(randomWord) {
    super('Cute or scary?', '\n');

    this.embed.fields = [
      {
        name: 'Word',
        value: `**${randomWord}**`,
        inline: true
      }
    ]
  }
}

module.exports = CuteScaryEmbedSchema;
