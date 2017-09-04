const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname,

  entry: {
  	main: path.resolve(__dirname, 'client/scripts/main'),
    cms: path.resolve(__dirname, 'client/scripts/cms')
  },

  output: {
    path: path.resolve(__dirname, 'server/public/js'),
    filename: '[name]-[chunkhash:8].min.js'
  },

  module: {

    rules: [

      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['es2015',
                  { modules: false }
                ],
                'react'
              ]
            }
          }
        ]
      },

      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options : { 
                sourceMap: true,
                importLoaders: 2
              } 
            }, 
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  autoprefixer(),
                  cssnano()
                ],
                sourceMap: true
              }
            },
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

  // devtool: 'source-map',

  plugins: [

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new CleanWebpackPlugin([
      path.resolve(__dirname, 'server/public/js/*.js'),
      path.resolve(__dirname, 'server/public/css/*.css'),
      path.resolve(__dirname, 'server/public/js/*.gz')
    ]),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest'
    }),

    new ExtractTextPlugin('../css/main-[chunkhash:8].min.css'),

    new AssetsPlugin({
    	filename: 'manifest.json',
    	processOutput(output) {
    		Object.keys(output).forEach((v) => {
    			Object.keys(output[v]).forEach((vv) => {
    				output[v][vv] = path.join('/js', output[v][vv]);
    			});
    		});
    		return JSON.stringify(output);
    	}
    }),

    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    })

    //todo: add manifest paths to home handlebars.

  ]
}