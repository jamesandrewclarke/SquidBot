class EmbedSchema {
  constructor(title, description) {
    this.title = title;
    this.description = description;

    this.embed = {
      title: this.title,
      description: this.description,
      timestamp: new Date(),
      color: 0x008cff,
      footer: {
        text: 'SquidBot',
      }
    }
  }

  get() {
    return this.embed;
  }
}

module.exports = EmbedSchema;
