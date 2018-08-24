const path = require('path')

module.exports = [
  {
    mode: 'development',
    name: 'client',
    target: 'web',
    entry: './src/client.jsx',
    output: {
      path: path.join(__dirname, 'static'),
      filename: 'client.js',
      publicPath: '/static/',
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
                resources: path.join(__dirname, 'src/scss/variables.scss')
              }
            }
          ]
        }
      ],
    },
  },
  {
    mode: 'development',
    name: 'server',
    target: 'node',
    entry: './src/server.jsx',
    output: {
      path: path.join(__dirname, 'static'),
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/static/',
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
                resources: path.join(__dirname, 'src/scss/variables.scss')
              }
            }
          ]
        }
      ],
    },
  }
]