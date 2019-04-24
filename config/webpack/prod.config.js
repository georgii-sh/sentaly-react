const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const environment = require('../environment-vars')

module.exports = [
	{
    mode: 'production',
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
						'isomorphic-style-loader',
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
			}),
			new webpack.optimize.OccurrenceOrderPlugin(),
			new CompressionPlugin({
				asset: '[path].gz[query]',
				algorithm: 'gzip',
				test: /\.js$|\.css$|\.scss$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
				threshold: 10240,
				minRatio: 0.8
			}),
		]
	},
	{
    mode: 'production',
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
						'isomorphic-style-loader',
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
			}),
			new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }]),
			new CompressionPlugin({
				asset: '[path].gz[query]',
				algorithm: 'gzip',
				test: /\.js$|\.css$|\.scss$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
				threshold: 10240,
				minRatio: 0.8
			}),
		]
	}
]