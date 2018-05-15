const commonConfig = require('./common.config');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(commonConfig, {
    context: path.resolve(__dirname, './src'),
    entry: './index.tsx',
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
});
