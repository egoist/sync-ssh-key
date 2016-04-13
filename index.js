'use strict'
const spawn = require('cross-spawn').sync

module.exports = function (url) {
  if (typeof url !== 'string') {
    throw new TypeError('Expected a string')
  }

  const opts = {stdio: 'inherit'}
  spawn(`cat ~/.ssh/id_rsa.pub | ssh ${url} "mkdir -p ~/.ssh && cat >>  ~/.ssh/authorized_keys"`, opts)
}
