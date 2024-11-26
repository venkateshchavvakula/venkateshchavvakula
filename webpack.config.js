const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')
/*-------------------------------------------------*/
module.exports = {

    // webpack optimization mode
    mode: ('development' === process.env.NODE_ENV ? 'development' : 'production'),

    // entry files
    entry: [
        './src/index.js', // react
    ],

    // output files and chunks
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build/[name].js',
    },

    // module/loaders configuration
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                // exclude: /(node_modules)/, // Remove this 
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.(gif|png|svg|jpg|mp4|ico)$/, //Customise according to your need
                type: 'asset/resource',
            }
        ]
    },

    // webpack plugins
    plugins: [

        new webpack.DefinePlugin({
            'process.env.REACT_APP_BACKEND_URL': JSON.stringify(process.env.REACT_APP_BACKEND_URL),
            'process.env.REACT_APP_ACCESS_TOKEN': JSON.stringify(process.env.REACT_APP_ACCESS_TOKEN),
        }),

        // extract css to external stylesheet file
        new MiniCssExtractPlugin(),

        // prepare HTML file with assets
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'public/index.html'),
            minify: true,
        }),

        // copy static files from `src` to `dist`
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/images'),
                    to: path.resolve(__dirname, 'dist/images')
                },
                {
                    from: path.resolve(__dirname, 'public/robots.txt'),
                    to: path.resolve(__dirname, 'dist/robots.txt')
                },
                {
                    from: path.resolve(__dirname, 'public/fonts'),
                    to: path.resolve(__dirname, 'dist/fonts')
                },
                {
                    from: path.resolve(__dirname, 'public/sitemap.xml'),
                    to: path.resolve(__dirname, 'dist/sitemap.xml')
                }
            ]
        }),
    ],

    // resolve files configuration
    resolve: {

        // file extensions
        extensions: ['.js', '.jsx', '.scss', '.css'],
    },

    // webpack optimizations
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,

                vendor: {
                    chunks: 'all', // both : consider sync + async chunks for evaluation
                    name: 'vendor', // name of chunk file
                    test: /node_modules/, // test regular expression
                }
            }
        }
    },

    // development server configuration
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },

    // generate source map
    devtool: 'source-map'

};