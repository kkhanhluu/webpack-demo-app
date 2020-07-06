const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
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
};
