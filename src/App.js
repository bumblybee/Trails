import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "@reach/combobox/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";
import { LoadScript } from "@react-google-maps/api";

import UserProvider from "./context/user/UserProvider";
import SearchProvider from "./context/search/SearchProvider";
import ErrorProvider from "./context/error/ErrorProvider";
import HoverProvider from "./context/hover/HoverProvider";

import Error from "./components/error/Error";
import Nav from "./components/layout/Nav";
import Landing from "./pages/landing/Landing";
import SearchPage from "./pages/search/SearchPage";
import ScoutTrailForm from "./pages/scout/ScoutTrailForm";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

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
            <UserProvider>
              <HoverProvider>
                <Error />
                <Nav />
                <Switch>
                  <Route path="/search" exact>
                    <SearchPage />
                  </Route>
                  <Route path="/scout">
                    <ScoutTrailForm />
                  </Route>
                  <Route path="/signup" exact>
                    <Signup />
                  </Route>
                  <Route path="/login" exact>
                    <Login />
                  </Route>
                  <Route path="/logout" exact>
                    <Redirect to="/" />
                  </Route>
                  <Route path="/" exact>
                    <Landing />
                  </Route>
                </Switch>
              </HoverProvider>
            </UserProvider>
          </ErrorProvider>
        </SearchProvider>
      </Router>
    </LoadScript>
  );
}

export default App;
