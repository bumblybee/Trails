import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";

import SearchProvider from "./context/search/SearchProvider";

import Nav from "./components/layout/Nav";
import Landing from "./pages/landing/Landing";
import Search from "./pages/search/Search";

function App() {
  return (
    <Router>
      <SearchProvider>
        <Nav />
        <Switch>
          <Route path="/search" exact>
            <Search />
          </Route>
          <Route path="/" exact>
            <Landing />
          </Route>
        </Switch>
      </SearchProvider>
    </Router>
  );
}

export default App;
