/* eslint-disable import/no-extraneous-dependencies */
const express = require('express')
const path = require('path')

const app = express()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')
const config = require('./config/webpack/dev.config')

const compiler = webpack(config)

app.use('/assets', express.static(path.join(__dirname, './assets'), { maxAge: 600 }))

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/'
  })
)
app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')))
app.use(webpackHotServerMiddleware(compiler))

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Started dev server on port: ${port}`)
})
