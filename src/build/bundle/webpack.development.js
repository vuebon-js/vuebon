const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        filename: '[name].[hash].js',
        chunkFilename: 'chunks/chunk.[name].[contentHash].js'
    },
    devServer: {
        contentBase: path.resolve('.', 'dist'),
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!@vuebon).*/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            ["@babel/env", {
                                "debug": false,
                                "useBuiltIns": "usage",
                                "targets": "last 3 Chrome versions",
                                "corejs": 3
                            }]
                        ],
                        "plugins": [
                            ["@babel/proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties"],
                            ["@babel/plugin-proposal-private-methods"],
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
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/build/static/index.template.html',
            filename: path.resolve('.', 'dist/index.html'),
            minify: {
                collapseWhitespace: false,
                removeComments: false
            },
            hash: true,
            favicon: path.resolve('.', 'src/build/static/favicon.png')
        })
    ]
}