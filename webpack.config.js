var path = require('path');
var webpack = require('webpack');
var webpackServer=require('webpack-dev-server');
var env = process.env.NODE_ENV;
module.exports = {
	entry: ['./src/index.jsx'],
	output: {
		path: __dirname, // 输出文件的保存路径
		filename: 'bundle.js', // 输出文件的名称
	
	},
	devServer: {
    	historyApiFallback: true,
    	contentBase:"public/",
			inline: true
  },
	module: {
		loaders: [
		{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
    },
		{
			test: /\.js|$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		},
		{
      test: /\.css$/,
      loader: "style-loader!css-loader?modules",

    },
   {
　　　　test: /\.(png|jpg)$/,
　　　　loader: 'url-loader?limit=8192&name=img/[hash:8].[name].[ext]'
　　},
		{
			test:/\.(svg|ttf)\??.*$/,
			loader:'url-loader?name=fonts/limit=10000&[name].[md5:hash:hex:7].[ext]',
		},
		{
			 test: /\.(eot|woff)\??.*$/, 
			loader: "file-loader?name=project/fonts/[hash:8].[name].[ext]" 
			 }

	 ]
		
	},
	plugins: [
      new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
    ],
	resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react'),
    },
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
  },
};