const path = require("path");
const config = require("./webpack.config.base.js");
const conf = Object.assign({}, config, {
  mode: "production"
});
module.exports = conf;
