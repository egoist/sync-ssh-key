'use strict'
const child = require('child_process')

module.exports = function (url) {
  if (typeof url !== 'string') {
    return Promise.reject(new TypeError('Expected a string'))
  }

  return new Promise((resolve, reject) => {
    child.exec(`cat ~/.ssh/id_rsa.pub | ssh ${url} "mkdir -p ~/.ssh && cat >>  ~/.ssh/authorized_keys"`, (error, stdout, stderr) => {
      if (error) {
        return reject(error)
      }
      if (stderr) {
        return reject(new Error(stderr.toString()))
      }
      reject(stdout.toString())
    })
  })
}
