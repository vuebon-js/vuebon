const path                   = require('path');
const webpack                = require('webpack');
const { VueLoaderPlugin }    = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv                 = require('dotenv-webpack');

module.exports = {
    entry: {
        'app': path.resolve('.', 'src/app.js'),
        'styles': path.resolve('.', 'src/assets/style/app.scss')
    },
    output: {
        path: path.resolve('.', 'dist'),
        publicPath: '/',
    },
    resolve: {
        alias: {
            axios: 'axios/lib/axios',
            vue  : 'vue/dist/vue.esm.js',
            jquery: 'jquery/src/jquery',
            '@': path.resolve('.'),
            '@src': path.resolve('.', 'src'),
            '@config': path.resolve('.', 'src/config'),
            '@view': path.resolve('.', 'src/view'),
            '@provider': path.resolve('.', 'src/providers'),
            '@middleware': path.resolve('.', 'src/middleware')
        },
        extensions: ['.js', '.vue', '.scss', '.css', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                }
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                use: [
                    'file-loader?name=[hash].[ext]&outputPath=img/',
                    'image-webpack-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: {
                    loader: 'file-loader?name=[hash].[ext]&outputPath=font/',
                }
            },
            {
                test: /\.ts/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            moment: 'moment',
            axios: "axios",
            Vue: ["vue", "default"]
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [ path.resolve('.', 'dist') ]
        }),
        new VueLoaderPlugin(),
        new Dotenv(),
    ]
}