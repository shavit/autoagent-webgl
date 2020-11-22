const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
	main: __dirname + '/src/index.js'
    },
    output: {
	path: __dirname + '/dist',
	filename: 'index.bundle.js'
    },
    devServer: {
	contentBase: __dirname + '/src',
	hot: true,
	open: false,
	host: '0.0.0.0',
	port: 3000
    },
    plugins: [
	new HtmlWebpackPlugin({
	    title: 'Auto Agent - Hot Module Replacement',
	    inject: false,
	    hash: true,
	    filename: 'index.html'
	})
    ]
}
