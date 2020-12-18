import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "@reach/combobox/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";
import { LoadScript } from "@react-google-maps/api";

import SearchProvider from "./context/search/SearchProvider";
import ErrorProvider from "./context/error/ErrorProvider";

import Error from "./components/error/Error";
import Nav from "./components/layout/Nav";
import Landing from "./pages/landing/Landing";
import SearchPage from "./pages/search/SearchPage";
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
          <ErrorProvider>
            <Error />
            <Nav />
            <Switch>
              <Route path="/search" exact>
                <SearchPage />
              </Route>
              <Route path="/scout">
                <ScoutTrailForm />
              </Route>
              <Route path="/" exact>
                <Landing />
              </Route>
            </Switch>
          </ErrorProvider>
        </SearchProvider>
      </Router>
    </LoadScript>
  );
}

export default App;
