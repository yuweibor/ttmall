const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "./../dist"),
    filename: "[hash].bundle.js",
    publicPath: "/publicPath/",
    library: "",
    sourceMapFilename: "sourcemaps/[hash].map",
    crossOriginLoading: "use-credentials"
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: "sass-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: ["htmllint-loader", { loader: "html-loader", options: {} }]
      }
    ]
  },
  devtool: "cheap-module-source-map",
  performance: {
    hints: false, //error/false
    maxAssetSize: 200000,
    maxEntrypointSize: 400000,
    assetFilter: function(assetFilename) {}
  },
  devServer: {
    port: 3000,
    hot: true,
    compress: true,
    contentBase: path.resolve(__dirname, "./../dist/"),
    watchContentBase: true,
    publicPath: "/publicPath/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      sourceMap: true,
      inject: true,
      chunksSortMode: "dependency"
    }),
    new CleanWebpackPlugin()
  ]
};
