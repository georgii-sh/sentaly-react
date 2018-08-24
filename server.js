const express = require('express')
const path = require('path')
const compression = require('compression')
const app = express()

const ClientStatsPath = path.join(__dirname, './public/stats.json')
const ServerRendererPath = path.join(__dirname, './public/server.js')
const ServerRenderer = require(ServerRendererPath).default
const Stats = require(ClientStatsPath)

app.use(compression())

app.use('/assets', express.static(path.join(__dirname, './public/assets'), { maxAge: 1200 }))
app.use('/client.js', express.static(path.join(__dirname, './public/client.js'), { maxAge: 1200 }))

app.use(ServerRenderer(Stats))

app.listen(process.env.PORT)