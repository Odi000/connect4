const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/script.js',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    rules: [
        {
            test: /.css$/i,
            use: ['style-loader','css-loader']
        }
    ]
}