const path = require('path');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
	entry: './index.js',
	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	devtool: 'inline-source-map',
	target: 'node',
	resolve: {
		extensions: ['.js', '.json']
	}
};
