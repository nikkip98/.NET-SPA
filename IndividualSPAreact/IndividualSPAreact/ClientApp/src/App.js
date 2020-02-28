import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Types from "./containters/Types/Types";
import Type from "./containters/Type/Type";
import Forum from "./containters/Forum/Forum";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Types} />
          <Route exact path="/type/:id" component={Type} />
          <Route exact path="/forum/" component={Forum} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
