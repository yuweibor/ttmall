import React from "react";
import "@babel/polyfill";
const { fromJS } = require("immutable");

class Home extends React.PureComponent {
  constructor() {
    super();
  }

  componentWillMount() {
    this.params = this.props.match.params;
    this.test().then(() => {
      console.log("done");
    });
  }

  async test() {}

  wait(sec) {
    return new Promise((ok, err) => {
      setTimeout(() => {
        ok();
      }, sec);
    });
  }

  render() {
    return <div>home</div>;
  }
}

export default Home;
