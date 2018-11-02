import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Grid from "./Grid";
import Tabs from "./Tabs";
import News from "./News";
import Log from "./Log";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/grid" component={Grid} />
            <Route path="/tabs" component={Tabs} />
            <Route path="/log" component={Log} />
            <Route path="/news" component={News} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
