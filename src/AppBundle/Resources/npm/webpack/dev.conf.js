const webpackMerge = require('webpack-merge');
const path = require('path');

const config = require('./conf.js');

module.exports = webpackMerge(config, {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve(__dirname, '../../public/assets'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    chunkFilename: '[id].chunk.js'
  }
});
