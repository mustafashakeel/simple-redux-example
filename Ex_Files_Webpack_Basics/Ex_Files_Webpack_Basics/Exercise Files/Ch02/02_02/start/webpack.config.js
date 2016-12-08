module.exports = {
	entry: './src/main.js',
	output: {
		path: 'build',
		filename: 'bundle.js'
	},
	module:{
		loader:{
			test:/\.js$/,
			exclude:/(node_modules)/,
			loader:'babel'
		}
	}

};