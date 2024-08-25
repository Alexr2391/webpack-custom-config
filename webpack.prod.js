const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        assetModuleFilename: 'assets/images/[name].[contenthash][ext]',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                type: 'asset/resource',  //<-- Assets module - asset/resource
                generator: {
                    filename: 'assets/images/[name].[contenthash][ext]',
                }
            }
            // Add other rules as needed
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css',
        }),
        // Add other production plugins as needed
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public/assets/images',
                    to: 'assets/images',
                    noErrorOnMissing: true
                },
            ],
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            }),
        ],
    },
});
