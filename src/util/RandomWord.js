const fs = require('fs')

const nounlist = fs.readFileSync('./nounlist.txt').toString().split('\n')

module.exports = function () {
  return nounlist[Math.floor(Math.random() * nounlist.length)]
}
