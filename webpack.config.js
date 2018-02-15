// const ClosureCompilerPlugin = require('webpack-closure-compiler');

module.exports = {
  context: __dirname + '/src',
  entry: './main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    library: 'confreader',
    libraryTarget: 'umd',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.html$/,
        loader: 'file-loader',
        exclude: /node_modules/,
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  }
  // plugins: [
  //   new ClosureCompilerPlugin({
  //     // Use the line below if you don't have java installed
  //     // jsCompiler: true
  //     compiler: {
  //       // jar: 'path/to/your/custom/compiler.jar', //optional
  //       language_in: 'ECMASCRIPT6',
  //       language_out: 'ECMASCRIPT5',
  //       compilation_level: 'SIMPLE'
  //     },
  //     concurrency: 3,
  //   })
  // ]
};
