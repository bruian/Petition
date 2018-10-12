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
    rules: [
      {
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
      include: path.resolve(__dirname, './static/js'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: 'env'
        }
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