const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	mode: "development",
	devtool: "source-map",
	context: path.resolve(__dirname, './'),

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},

	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "ts-loader"
					}
				]
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.css?$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
			},{
				test: /\.scss?$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true },
					}, {
						loader: 'sass-loader',
						options: { sourceMap: true },
					}
				]
			},
		]
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin()
		]
	},
	devServer: {
		publicPath: '/dist/',
		contentBase: [path.join(__dirname, 'public'), path.join(__dirname, './')],
		port: 9000,
		open: true,
		historyApiFallback: true,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
		//new BundleAnalyzerPlugin(),
		new MomentLocalesPlugin(),
	],
};
