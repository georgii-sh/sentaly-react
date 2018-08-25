const express = require('express');
const path = require('path');
const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const config = require('./webpack.development.config.js');
const compiler = webpack(config);

app.use('/assets', express.static(path.join(__dirname, './assets'), { maxAge: 600 }))
// app.use('/client.js', express.static(path.join(__dirname, './public/client.js'), { maxAge: 1200 }))

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/",
}));
app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

app.listen(8080, () => {
  console.log('Started dev server on port: 8080')
});