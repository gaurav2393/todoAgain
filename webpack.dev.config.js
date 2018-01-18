const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: "inline-source-map",
    entry: [
        'babel-polyfill',
        //'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, "./src/js/main.jsx")
    ],
    output: {
    	path: path.resolve(__dirname, "./public"),//try to change it to public and see what happens
    	filename: "bundle.js",
    	publicPath: "/"
    },
    resolve: {
    	extensions: ['.js', '.jsx']
    },
    devServer: {

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
     module: {
        loaders: [
            
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: [{
                    loader: "style-loader"
                },
                    {
                        loader: "css-loader"
                    }]
            }
            // {
            //     enforce: 'pre',
            //     test: /\.(sass|scss)$/,
            //     //loader: "style-loader!css-loader!sass-loader"
            //     loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            // }
            // {
            //     test: /\.sass$/,
            //     loaders: [
            //         {
            //             loader: "style-loader"
            //         },
            //         {
            //             loader: "css-loader"
            //         },
            //         {
            //             loader: "sass-loader"
            //         }
            //     ]
            // }
        ]
    }
}