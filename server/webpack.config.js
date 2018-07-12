const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  entry: './server.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'server.js',
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
    }, ],
  },
  target: 'node',
  externals: webpackNodeExternals(),
};
