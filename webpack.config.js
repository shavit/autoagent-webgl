const path = require('path')

module.exports = {
    entry: {
	main: __dirname + '/src/index.js'
    },
    devServer: {
	contentBase: __dirname + '/src',
	hot: true,
	open: false,
	host: '0.0.0.0',
	port: 3000
    }
}
