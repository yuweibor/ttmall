const path = require("path");
const config = require("./webpack.config.base.js");
module.exports = Object.assign({},config,{
  mode: "development",
  entry: "./src/a.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: "less-loader"
      }
    ]
  }
};
