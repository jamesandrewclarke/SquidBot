const EmbedSchema = require('./EmbedSchema.js')

class MemberJoinEmbedSchema extends EmbedSchema {
  constructor (member) {
    super('New member!', `Welcome ${member} to the server!`)

    this.embed.author = {
      name: member.displayName,
      icon_url: member.user.avatarURL
    }
  }
}

module.exports = MemberJoinEmbedSchema
