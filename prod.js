var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

/*
  this is the transpilation script for deploying to production.
  first, it creates a build folder if necessary.
  then, it copies the index.html file in root to the build folder.
  it then transpiles the src files and outputs the resulting files
  to the build folder.
*/


// create a config object containing various webpack options
var config = {
  // your app entry point(s).
  // starting with these files/modules,
  // webpack builds your program's dependency graph.
  entry: [
    path.join(__dirname, 'src', 'index')
  ],


  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },


  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NoErrorsPlugin()
  ],


  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  //
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel?stage=0',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};

// create a webpack compiler based on your config
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
