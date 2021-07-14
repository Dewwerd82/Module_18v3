const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, "source", "index.js")
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "main.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "source", "index.html"),
        }),
    ],
    module: {
        rules: [{
                test: /\.scss$/,
                use: [
                    'css-loader',
                    'style-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.css$/,
                use: [
                    'css-loader',
                    'style-loader',
                ]
            },
            {
                test: /\.js$/,

                use: [
                    'css-loader',
                    'style-loader',
                ]
            }
        ]
    },
    optimization: {
        splitChunks: { chunks: "all" }
    }
}