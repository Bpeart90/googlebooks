import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

import "./App.css";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Header />
          <Wrapper>
            <Route exact path={["/", "/Search"]}>
              <Search />
            </Route>
            <Route exact path="/Saved">
              <Saved />
            </Route>
            <Route exact path="/NoMatch">
              <NoMatch />
            </Route>
          </Wrapper>

        </div>
      </Router>
    );
  };
};

export default App;