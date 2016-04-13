# sync-ssh-key [![NPM version](https://img.shields.io/npm/v/sync-ssh-key.svg)](https://npmjs.com/package/sync-ssh-key) [![NPM downloads](https://img.shields.io/npm/dm/sync-ssh-key.svg)](https://npmjs.com/package/sync-ssh-key) [![Build Status](https://img.shields.io/circleci/project/egoist/sync-ssh-key/master.svg)](https://circleci.com/gh/egoist/sync-ssh-key)

> Sync ssh public key to remote server so that you can login with being prompted for a password.

## Install

```bash
$ npm install --save sync-ssh-key
```

## Usage

```js
const syncTo = require('sync-ssh-key')

syncTo('username:password@ip')
```

## Related

- [sync-ssh-key-cli](https://github.com/egoist/sync-ssh-key-cli) - CLI for this module

## License

MIT © [EGOIST](https://github.com/egoist)
