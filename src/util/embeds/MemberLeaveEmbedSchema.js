const EmbedSchema = require('./EmbedSchema.js')

class MemberLeaveEmbedSchema extends EmbedSchema {
  constructor (member) {
    super('Bye :(', `${member} left the server`)

    this.embed.author = {
      name: member.displayName,
      icon_url: member.user.avatarURL
    }
  }
}

module.exports = MemberLeaveEmbedSchema
