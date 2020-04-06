import React from "react";
import Nav from "./../components/Nav";
import NavHOC from "./../components/NavHOC";
class App extends React.PureComponent {
  render() {
    return NavHOC(Nav)({
      arr: [
        { name: 2 },
        { name: 4 },
        { name: 1 },
        { name: 3 },
        { name: 9 },
        { name: 1 }
      ]
    });
  }
}

export default App;
