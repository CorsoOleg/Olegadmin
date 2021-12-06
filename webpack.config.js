const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(path.join(__dirname, 'build') )

module.exports = { 
	entry: __dirname + '/src/index.js',
	module: { 
		rules: [ 
				{ 
					test: /.js$/, 
					exclude: /node_modules/, 
					loader: 'babel-loader' 
				}
			]
	},
	output: { 
		filename: 'bundle.[hash].js', 
		path: path.join(__dirname, 'build') 
	},
	plugins: [new HtmlWebpackPlugin({ template: path.join(__dirname, 'index.html') })],
};