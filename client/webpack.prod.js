const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack').DefinePlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = env => merge(common, {
    output: {
        publicPath: (env && env.BASE_NAME ? env.BASE_NAME : '') + '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html.ejs'),
            inject: 'body',
            favicon: 'assets/favicon.ico',
        }),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'process.env.BASE_NAME': JSON.stringify(env && env.BASE_NAME ? env.BASE_NAME : ''),
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'api'),
            to: 'api'
        }]),
        new UglifyJSPlugin({
            sourceMap: true,
        }),
    ],
});
