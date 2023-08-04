const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    context: path.resolve(__dirname, 'src'),
    entry: './script.js',
    devtool: 'inline-source-map',
    devServer: {
        static: '../dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}