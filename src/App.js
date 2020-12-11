import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import { LoadScript } from "@react-google-maps/api";

import SearchProvider from "./context/search/SearchProvider";

import Nav from "./components/layout/Nav";
import Landing from "./pages/landing/Landing";
import Search from "./pages/search/Search";
import ScoutTrailForm from "./pages/scout/ScoutTrailForm";
const libraries = ["places"];

function App() {
  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <Router>
        <SearchProvider>
          <Nav />
          <Switch>
            <Route path="/search" exact>
              <Search />
            </Route>
            <Route path="/scout">
              <ScoutTrailForm />
            </Route>
            <Route path="/" exact>
              <Landing />
            </Route>
          </Switch>
        </SearchProvider>
      </Router>
    </LoadScript>
  );
}

export default App;
