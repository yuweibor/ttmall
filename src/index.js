import React from "react";
import ReactDom from "react-dom";
import {
  BrowserRouter as Router,
  HashRouter, //
  Switch,
  Route,
  useParams,
  Redirect
} from "react-router-dom";
import App from "./pages/App.js";
import Home from "./pages/Home.js";
import User from "./pages/User.js";

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/user">
          <User />
        </Route>
        <Route exact path="/user/home/:id" component={Home} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
};
ReactDom.render(<Routers />, document.getElementById("App"));
