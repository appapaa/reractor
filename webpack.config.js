const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: {main: './src/index.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        chunkFilename: '[name].chunk.js',
    },
    module: {

        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: [/\.css$/,/\.scss$/],
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [

        // new ExtractTextPlugin({filename: 'style.css'})
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ]
}