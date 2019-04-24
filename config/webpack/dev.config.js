const path = require('path')
const webpack = require('webpack')
const environment = require('../environment-vars')

module.exports = [
  {
    mode: 'development',
    name: 'client',
    target: 'web',
    entry: './src/client.jsx',
    output: {
      path: path.join(__dirname, '../../public'),
      filename: 'client.js',
      publicPath: '/public/',
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules\/)/,
          use: [
            {
              loader: 'babel-loader',
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader'
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: path.join(__dirname, '../../src/scss/variables.scss')
              }
            }
          ]
        }
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': environment
      })
    ]
  },
  {
    mode: 'development',
    name: 'server',
    target: 'node',
    entry: './src/server.jsx',
    output: {
      path: path.join(__dirname, '../../public'),
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/public/',
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules\/)/,
          use: [
            {
              loader: 'babel-loader',
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'isomorphic-style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader'
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: path.join(__dirname, '../../src/scss/variables.scss')
              }
            }
          ]
        }
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': environment,
        'process.env.IS_SERVER_RENDERING': JSON.stringify(true)
      })
    ]
  },
]