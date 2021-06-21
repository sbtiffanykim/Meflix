import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "Components/Header";
import Search from "Routes/Search";

// eslint-disable-next-line
export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" render={(props) => <Home {...props} />} />
        <Route path="/tv" render={(props) => <TV {...props} />} />
        <Route path="/search" render={(props) => <Search {...props} />} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
