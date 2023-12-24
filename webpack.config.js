const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const env = process.env.NODE_ENV || 'development';

let config;

if (env === 'production') {
    const prodConfig = require('./webpack.prod.js');
    config = merge(common, prodConfig);
} else {
    const devConfig = require('./webpack.dev.js');
    config = merge(common, devConfig);
}

module.exports = config;