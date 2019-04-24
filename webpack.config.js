const prodMode = process.env.NODE_ENV === 'production'

const prod = require('./config/webpack/prod.config.js')
const dev = require('./config/webpack/dev.config.js')

module.exports = prodMode ? prod : dev