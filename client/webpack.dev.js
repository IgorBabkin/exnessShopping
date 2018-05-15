const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;
const DefinePlugin = require('webpack').DefinePlugin;

module.exports = merge(common, {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html.ejs'),
            inject: 'body',
            favicon: 'assets/favicon.ico',
        }),
        new HotModuleReplacementPlugin(),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ],

    devServer: {
        port: 3330,
        host: 'localhost',
        hotOnly: true,
        historyApiFallback: true,
    },

    devtool: 'source-map',
});
