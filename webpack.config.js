const commonConfig = require('./common.config');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: './index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    resolve: commonConfig.resolve,
    module: commonConfig.module,

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html.ejs'),
            inject: 'body',
            favicon: 'assets/favicon.ico',
        }),
        new HotModuleReplacementPlugin()
    ],

    devServer: {
        port: 3330,
        host: '0.0.0.0',
        hotOnly: true,
        historyApiFallback: true,
    },
};
