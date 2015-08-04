var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/*
  this is the transpilation script for deploying to production.
  note that it extracts css intoa separate bundle.
  first, it creates a build folder if necessary.
  then, it copies the index.html file in root to the build folder.
  it then transpiles the src files and outputs the resulting files
  to the build folder.
*/


var config = {
  // don't need hot reloading, so only entry point is app itself
  entry: [
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    // builds production version of React for performance
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    // minification plugin
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('bundle.css'), // put css in separate bundle
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel?stage=0',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        // loader for extracting css into bundle.css
        loader: ExtractTextPlugin.extract(
          'style-loader', 'css-loader'
        ),
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(eot|woff|ttf|svg|otf)/,
        loader: 'file-loader',
        include: path.join(__dirname, 'src')
      }
    ]
  }
};


var compiler = webpack(config);

console.log('Starting file-watching and build process. Press Ctrl+C to exit.');

compiler.watch(333, function(err, stats){
  if (stats){
    if (stats.hasErrors()){
      stats.toJson().errors.forEach(function(e){ console.error(e); });
      console.log('----------------------------------------------------------');
    } else {
      console.log('Build done at ' + new Date().toString() );
    }
  }
});
