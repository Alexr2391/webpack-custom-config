const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        alias: {
            '@assets': path.resolve(__dirname, 'public/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@common': path.resolve(__dirname, 'src/common'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@constants': path.resolve(__dirname, 'src/constants'),
        },
        fallback: {
            "timers": require.resolve("timers-browserify"),
            "path": require.resolve("path-browserify"),
            "fs": false,
            "os": false,
            "util": require.resolve("util/")
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [{
                    loader: 'ts-loader',
                }],
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(pdf|docx|csv)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new NodePolyfillPlugin(),
        new CleanWebpackPlugin(),
        new Dotenv({
            path: `./.env.${process.env.NODE_ENV}`,
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
};