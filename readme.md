# rollodeqc-gh-repo-webhooks
[![Build Status](https://travis-ci.org/millette/rollodeqc-gh-repo-webhooks.svg?branch=master)](https://travis-ci.org/millette/rollodeqc-gh-repo-webhooks)
[![Coverage Status](https://coveralls.io/repos/github/millette/rollodeqc-gh-repo-webhooks/badge.svg?branch=master)](https://coveralls.io/github/millette/rollodeqc-gh-repo-webhooks?branch=master)
[![Dependency Status](https://gemnasium.com/badges/github.com/millette/rollodeqc-gh-repo-webhooks.svg)](https://gemnasium.com/github.com/millette/rollodeqc-gh-repo-webhooks)
> RoLLodeQc utility to fetch repo webhooks.

## Install
```
$ npm install --save rollodeqc-gh-repo-webhooks
```

## Now with update-notifier
The cli now uses [update-notifier][] to let the user know about updates to this program.

Users have the ability to opt-out of the update notifier by changing
the optOut property to true in ~/.config/configstore/update-notifier-rollodeqc-gh-user-streak.json.
The path is available in notifier.config.path.

Users can also opt-out by setting the environment variable NO_UPDATE_NOTIFIER
with any value or by using the --no-update-notifier flag on a per run basis.

## Usage
```js
const rollodeqcGhRepoWebhooks = require('rollodeqc-gh-repo-webhooks')

rollodeqcGhRepoWebhooks('unicorns')
//=> 'unicorns & rainbows'
```

## API
### rollodeqcGhRepoWebhooks(input, [options])
#### input
Type: `string`

Lorem ipsum.

#### options
##### foo
Type: `boolean`<br>
Default: `false`

Lorem ipsum.

## CLI
```
$ npm install --global rollodeqc-gh-repo-webhooks
```

```
$ rollodeqc-gh-repo-webhooks --help

  Usage
    rollodeqc-gh-repo-webhooks [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ rollodeqc-gh-repo-webhooks
    unicorns & rainbows
    $ rollodeqc-gh-repo-webhooks ponies
    ponies & rainbows
```


## License
AGPL-v3 © [Robin Millette](http://robin.millette.info)

[update-notifier]: <https://github.com/yeoman/update-notifier>
