import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "@reach/combobox/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";
import { LoadScript } from "@react-google-maps/api";

import UserProvider from "./context/user/UserProvider";
import SearchProvider from "./context/search/SearchProvider";
import BookmarkProvider from "./context/bookmark/BookmarkProvider";
import ErrorProvider from "./context/error/ErrorProvider";
import HoverProvider from "./context/hover/HoverProvider";

import Error from "./components/error/Error";
import Nav from "./components/layout/nav/Nav";
import Landing from "./pages/landing/Landing";
import MapView from "./pages/map_view/MapView";
import TrailPage from "./pages/trail_page/TrailPage";
import ScoutTrailForm from "./pages/scout_trail/ScoutTrailForm";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import ScoutedTrails from "./pages/scouted_trails/ScoutedTrails";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import PasswordResetRequest from "./pages/passwordReset/PasswordResetRequest";
import PasswordReset from "./pages/passwordReset/PasswordReset";

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
              <BookmarkProvider>
                <HoverProvider>
                  <Error />
                  <Nav />
                  <Switch>
                    <Route path="/signup" exact>
                      <Signup />
                    </Route>
                    <Route path="/login" exact>
                      <Login />
                    </Route>
                    <Route path="/reset-password/:token" exact>
                      <PasswordReset />
                    </Route>
                    <Route path="/reset-password" exact>
                      <PasswordResetRequest />
                    </Route>

                    <Route path="/search" exact>
                      <MapView />
                    </Route>
                    <Route path="/trail/:id" exact>
                      <TrailPage />
                    </Route>
                    <Route path="/bookmarks" exact>
                      <Bookmarks />
                      <Route path="/scouted-trails" exact>
                        <ScoutedTrails />
                      </Route>
                    </Route>
                    <Route path="/scout">
                      <ScoutTrailForm />
                    </Route>
                    <Route path="/" exact>
                      <Landing />
                    </Route>
                  </Switch>
                </HoverProvider>
              </BookmarkProvider>
            </UserProvider>
          </ErrorProvider>
        </SearchProvider>
      </Router>
    </LoadScript>
  );
}

export default App;
