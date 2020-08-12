module.exports = [
	{
		test: /\.html$/,
		use: [{
			loader: 'html-loader'
		}]
	},
	{
		test: /\.css$/,
		use: ['style-loader', 'css-loader']
	},
	{
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader'
		}
	},
	{
		test: /\.(png|jpe?g|gif|svg)?$/i,
		use: [
			{
				loader: 'url-loader',
				options: { limit: 10000 }
			},
			'image-webpack-loader'
		]
	}
]
