const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: ["bundle"].js,
    publicPath: "/publicPath/",
    library: "",
    // libraryTarget: "umd",
    // libraryTarget: "jsonp",
    // pathinfo: true,
    // chunkFilename: "[id].js",
    // chunkFilename:"[chunkhash].js",
    // sourceMapFilename: "sourcemaps/[file].map",
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
        exclude: /(node_modules|bower_components)/,
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
  performance: {
    hints: "warning", //error/false
    maxAssetSize: 200000,
    maxEntrypointSize: 400000,
    assetFilter: function(assetFilename) {}
  },
  devServer: {
    port: 3000,
    contentBase: "./dist"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      //   favicon:
      infect: true,
      sourceMap: true,
      chunksSortMode: "dependency"
    }),
    new CleanWebpackPlugin()
  ]
};
