const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');

module.exports = {
  context: __dirname,

  entry: {
  	main: path.resolve(__dirname, 'client/scripts/main'),
    cms: path.resolve(__dirname, 'client/scripts/cms')
  },

  output: {
    path: '/',
    publicPath: '/',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {

    rules: [

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['es2015',
                  { modules: false }
                ],
                'es2016',
                'es2017',
                'react'
              ]
            }
          },
          // 'eslint-loader'
        ]
      },

      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
            	loader: 'sass-loader',
            	options: {
            		sourceMap: true
            	}
            }
          ]
        })
      }

    ]

  },

  devtool: 'cheap-eval-source-map',

  plugins: [

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),

    new ExtractTextPlugin('main.css'),

    new LiveReloadPlugin()

  ]
}