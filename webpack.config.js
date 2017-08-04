const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const PATHS = {
	root: __dirname,
	app: path.join(__dirname, 'src'),
	dist: path.join(__dirname, 'dist')
};

const config = {
	entry: {
		app: [PATHS.app]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	output: {
		path: PATHS.dist,
		filename: '[name].js',
		sourceMapFilename: '[file].map',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['eslint-loader'],
				include: PATHS.app,
				exclude: /node_modules/,
				enforce: 'pre'
			},
			{
				test: /\.html$/,
				use: 'raw-loader',
				exclude: ['../index.html']
			},
			{
				test: /\.(jpg|png|gif|svg|otf|woff)$/,
				use: 'file-loader'
			},
			{
				test: /\.jsx?$/,
				use: ['babel-loader?cacheDirectory'],
				include: PATHS.app
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							camelCase: 'dashes',
							localIdentName: '[path][name]__[local]'
						}
					},
					{
						loader: 'resolve-url-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './node_modules/html-webpack-template/index.ejs',
			title: 'Re-Modal',
			appMountId: 'app',
			inject: false,
			minify: {
				collapseWhitespace: true,
				conservativeCollapse: true,
				preserveLineBreaks: true,
				useShortDoctype: true,
				html5: true
			},
			mobile: true
		}),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	],
	devtool: 'eval-source-map',
	devServer: {
		contentBase: PATHS.dist,
		host: '0.0.0.0',
		port: 9000,
		openPage: '',
		inline: true,
		open: true
	},
	stats: {
		children: false
	}
};

module.exports = config;
