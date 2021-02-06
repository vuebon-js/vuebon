const { merge } = require('webpack-merge');
module.exports = merge(
    require('../build/bundle/webpack.common'),
    require(`../build/bundle/webpack.${process.env.NODE_ENV}`)
);