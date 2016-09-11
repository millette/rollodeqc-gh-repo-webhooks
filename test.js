'use strict'
import test from 'ava'
import fn from './'

test('one string arg', async t => {
  const result = await fn('millette/rollodeqc-gh-repo-webhooks')
  t.truthy(result.hooks.length)
})

test('two args', async t => {
  const result = await fn('millette', 'rollodeqc-gh-repo-webhooks')
  t.truthy(result.hooks.length)
})

test('404', async t => await t.throws(fn('millette/rollodeqc-gh-repo-webhooks-404'), 'Response code 404 (Not Found)'))
