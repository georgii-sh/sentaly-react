require('dotenv').config()
const express = require('express')
const path = require('path')
const compression = require('compression')
const cors = require('cors')

const app = express()

const ServerRenderer = require('./public/server.js').default
const Stats = require('./public/stats.json')

app.use(compression())
app.use(cors())

app.use('/assets', express.static(path.join(__dirname, './public/assets'), { maxAge: 1200 }))
app.use('/favicon.ico', express.static(path.join(__dirname, './public/assets/icons/favicon.ico'), { maxAge: 1200 }))
app.use('/client.js', express.static(path.join(__dirname, './public/client.js'), { maxAge: 1200 }))

app.use(ServerRenderer(Stats))

app.listen(process.env.PORT)
