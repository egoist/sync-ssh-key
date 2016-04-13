#!/usr/bin/env node
const syncTo = require('./')

const url = process.argv[2]

syncTo(url)
  .then(() => {
    console.log('success')
  })
  .catch(e => {
    console.log(e.stack)
    process.exit(1)
  })
