const path = require('path')
const webpack = require('webpack')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const StatsPlugin = require('stats-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = [
	{
    mode: 'production',
		name: 'client',
		target: 'web',
    entry: './src/client.jsx',
		output: {
      path: path.join(__dirname, 'public'),
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
								localIdentName: '[hash:base64:10]',
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
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: '"production"'
				}
			}),
			new webpack.optimize.OccurrenceOrderPlugin(),
		]
	},
	{
    mode: 'production',
		name: 'server',
		target: 'node',
		entry: './src/server.jsx',
		output: {
      path: path.join(__dirname, 'public'),
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
							loader: MiniCssExtractPlugin.loader,
							options: {
								publicPath: '/public/assets/'
							}
						},
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[hash:base64:10]',
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
		plugins: [
			new MiniCssExtractPlugin({
				filename: "assets/[name].css",
				chunkFilename: "[id].css"
			}),
			new StatsPlugin('stats.json', {
				chunkModules: true,
				modules: true,
				chunks: true,
				exclude: [/node_modules[\\\/]react/],
			}),
		]
	}
]