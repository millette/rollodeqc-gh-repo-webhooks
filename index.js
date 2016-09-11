/*
RoLLodeQc utility to fetch repo webhooks.

Copyright 2016
Robin Millette <mailto:robin@millette.info>
<http://robin.millette.info>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the
[GNU Affero General Public License](LICENSE.md)
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict'

// npm
const ghGot = require('gh-got')

const doit = (repo) => ghGot(`repos/${repo.full_name}/hooks`)
  .then((y) => {
    if (y.body && y.body.length) { repo.hooks = y.body }
    return repo
  })

module.exports = (owner, reponame) => {
  if (typeof owner === 'object') { return doit(owner) }
  if (!reponame) {
    const s = owner.split('/')
    if (s.length !== 2) { throw new Error('Bad arguments') }
    owner = s[0]
    reponame = s[1]
  }
  return doit({ full_name: `${owner}/${reponame}` })
}
