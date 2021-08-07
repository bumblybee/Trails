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
import SuccessProvider from "./context/success/SuccessProvider";
import HoverProvider from "./context/hover/HoverProvider";

import Error from "./components/error/Error";
import Success from "./components/success/Success";
import Nav from "./components/layout/nav/Nav";
import Landing from "./pages/landing/Landing";
import MapView from "./pages/map_view/MapView";
import TrailPage from "./pages/trail_page/TrailPage";
import ScoutTrail from "./pages/scout_trail/ScoutTrail";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import ScoutedTrails from "./pages/scouted_trails/ScoutedTrails";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import PasswordResetRequest from "./pages/passwordReset/PasswordResetRequest";
import PasswordReset from "./pages/passwordReset/PasswordReset";
import { FaTools } from "react-icons/fa";

const libraries = ["places"];

function App() {
  return (
    <div className="maintenance">
      <FaTools /> Our site is currently down for maintenance
    </div>
  );
}

export default App;
