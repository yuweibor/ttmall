import React from "react";
const { fromJS } = require("immutable");

class Home extends React.PureComponent {
  constructor() {
    super();
  }

  componentWillMount() {
    this.params = this.props.match.params;
    const x = fromJS({
      a: "n",
      b: [{ c: 2, d: "发鬼地方个健康的分割空间<>" }]
    });
    const y = fromJS({
      a: "n",
      b: [{ c: 2, d: "发鬼地方个健康的分割空间<>" }]
    });
    y.set("a", "m");
    console.log(
      "a",
      x,
      y,
      x.get("a"),
      y.get("a"),
      x.equals(y),
      x == y,
      x === y
    );
  }

  render() {
    return <div>home</div>;
  }
}

export default Home;
