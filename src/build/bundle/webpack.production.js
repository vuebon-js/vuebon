const path                 = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const TerserPlugin         = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    output: {
        filename: 'js/[name].[contentHash].min.js',
        chunkFilename: 'js/chunks/chunk.[contentHash].min.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            ["@babel/preset-env", {
                                "debug": true,
                                "useBuiltIns": "usage",
                                "targets": "> .25%, not dead",
                                "corejs": 3
                            }]
                        ],
                        "plugins": [
                            ["@babel/proposal-decorators", { "legacy": true }],
                            ["@babel/proposal-class-properties"],
                            ["@babel/proposal-private-methods"],
                            "@babel/proposal-logical-assignment-operators",
                            "@babel/plugin-proposal-optional-chaining",
                            "@babel/plugin-proposal-nullish-coalescing-operator",
                            "@babel/plugin-proposal-private-property-in-object"
                        ]
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            //ident: 'postcss',
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer')(),
                                    require('cssnano')()
                                ]
                            }

                        }
                    },
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.[contentHash].min.css',
            chunkFilename: 'css/chunks/[name].[contentHash].min.css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('.', 'src/build/static/index.template.html'),
            filename: path.resolve('.', 'dist/index.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true
            },
            hash: false,
            favicon: path.resolve('.', 'src/build/static/favicon.png')
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                cache: true, // deprecated for v5
                parallel: true,
                sourceMap: true, // deprecated for v5
                terserOptions: {
                    ecma: 6,
                    mangle: true,
                    compress: true
                },
            })
        ],
    }
}