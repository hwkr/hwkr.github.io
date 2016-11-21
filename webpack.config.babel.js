/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import webpack from 'webpack';

const LessPluginCleanCSS = require('less-plugin-clean-css');
const LessPluginAutoPrefix = require('less-plugin-autoprefix');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const production = process.argv.indexOf('-p') !== -1;

export default {
  context: __dirname,
  entry: './index.jsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          // activate source maps via loader query
          'css?sourceMap!' +
          `less?${production ? 'compress' : 'sourceMap'}`
        ),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?name=[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /font[\\|/][^.]+\.(eot|svg|ttf|woff|woff2)$/,
        loaders: ['file?name=[name].[ext]'],
      },
    ],
  },
  lessLoader: {
    lessPlugins: (() => {
      if (production) {
        return [
          new LessPluginCleanCSS({ advanced: true, keepSpecialComments: 1 }),
          new LessPluginAutoPrefix({ browsers: ['last 2 versions'] }),
        ];
      }
      return [];
    })(),
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: (() => [
    new ExtractTextPlugin('styles.css'),
  ].concat(
    production ? [
      // Production only plugins
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
        output: {
          comments: false,
        },
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
    ] : [
      // Development only plugins
      /* Nothing */
    ])
  )(),
};
