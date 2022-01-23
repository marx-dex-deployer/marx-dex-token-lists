
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./marx-dex-token-lists.cjs.production.min.js')
} else {
  module.exports = require('./marx-dex-token-lists.cjs.development.js')
}
