const path = require('path')
const node = require('@rola/plugin-node')
const postcss = require('@rola/plugin-postcss')

const cwd = process.cwd()

module.exports = function createConfig ({ entry, watch, env, alias, banner, macros }) {
  const isNode = /server/.test(entry)

  return {
    in: entry,
    out: isNode ? {
      path: path.join(cwd, 'static'),
      libraryTarget: 'commonjs2'
    } : path.join(cwd, 'static'),
    env: env || {},
    alias: alias || {},
    macros: [].concat(macros || []).concat([
      postcss(),
      isNode && node()
    ].filter(Boolean)),
    banner: node ? (
      `require('source-map-support').install();`
    ) : (
      '/** built with rola */'
    ) + banner || ''
  }
}