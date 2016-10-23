const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './public/app.js',
  output: { path: './public', filename: 'bundle.js' },
  resolve: {
    root: __dirname,
    alias: {
      Greeter: 'public/components/Greeter.js',
      GreeterForm: 'public/components/GreeterForm.js',
      Hello: 'public/components/Hello.js',
    },
    extentions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
