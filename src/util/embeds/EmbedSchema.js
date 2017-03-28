class EmbedSchema {
  constructor(title, description) {
    this.title = title;
    this.description = description;

    this.embed = {
      title: this.title,
      description: this.description,
      color: 0x008cff,
      provider: {
        name: 'SquidBot'
      },
      footer: {
        text: 'SquidBot',
        icon_url: 'https://dac.cssnr.com/static/images/logo.png'
      }
    }
  }

  get() {
    return this.embed;
  }
}

module.exports = EmbedSchema;
