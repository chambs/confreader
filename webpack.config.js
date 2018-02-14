module.exports = {
  context: __dirname + '/src',
  entry: './main.js',
  output: {
    filename: './dist/bundle.js',
    library: 'confreader',
    libraryTarget: 'umd'
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
          outputPath: './dist/',
          name: '[path][name].[ext]'
        }
      }
    ]
  }
};
