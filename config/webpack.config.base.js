const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { index: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "./../dist"),
    filename: "[hash].bundle.js",
    publicPath: "/",
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
  //   devtool: "cheap-module-source-map",
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
    //watchContentBase: true,
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 打包输出HTML
      title: "title is",
      minify: {
        // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true // 压缩内联css
      },
      filename: "index.html",
      template: "index.html",
      showErrors: true,
      trunks: ["index"]
    }),
    new CleanWebpackPlugin()
  ]
};
