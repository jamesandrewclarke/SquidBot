const EmbedSchema = require('./EmbedSchema.js');

class CuteScaryEmbedSchema extends EmbedSchema {
  constructor(randomWord) {
    super('Cute or scary?', randomWord);
  }
}

module.exports = CuteScaryEmbedSchema;
