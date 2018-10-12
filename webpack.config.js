const path = require('path'),
      webpack = require('webpack')

module.exports = {
  entry: [
    './static/js/index.js'
  ],
  output: {
    filename: './src/bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: require.resolve('./node_modules/jquery'),
      use: [{
        loader: 'expose-loader',
        options: 'jQuery'
      },{
        loader: 'expose-loader',
        options: '$'
      }]
    },{
      test: /\.js$/,
      include: [path.resolve(__dirname, './static/js'), path.resolve(__dirname, './static/js/plugins')],
      use: {
        loader: 'babel-loader',
        options: {
          presets: 'env'
        }
      }
    },{
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader']
    },{
      test: /\.(png|jpg|gif|svg|ttf|woff2|woff|eot)$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: '[name].[ext]?[hash]'
      }
    }]
  },
  plugins: [
    /*
    new webpack.ProvidePlugin({
      $: require("jquery"),
      jQuery: require("jquery"),
      "window.jQuery": require("jquery")
    })
    */
  ]
}