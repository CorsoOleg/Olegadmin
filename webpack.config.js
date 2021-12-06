module.exports = { 
	entry: __dirname + '//src//evgen.js', 
	mode: 'production', 
	watch: false, 
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
		filename: 'transformed.js', 
		path: __dirname + '/build' 
	}
};