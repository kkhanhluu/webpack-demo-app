const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader', // 3. inject css to dom with a style tag
          'css-loader', // 2. transform css into common js
          'sass-loader', // 1. compile sass to css
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
};
