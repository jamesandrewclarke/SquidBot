module.exports = (title, description = 'ᅠ') => {
  return {
    title: title,
    description: `${description}`,
    timestamp: new Date(),
    color: 0x008cff,
    footer: {
      text: 'SquidBot',
    }
  }
}
