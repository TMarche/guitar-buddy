import React from "react";
import Modal from "./Modal";
import Nav from "./Nav";
import AppBar from "./AppBar";
import "../styles/styles.css";
import { Router, Link } from "@reach/router";
import Sessions from "./pages/Sessions";
import Dashboard from "./pages/Dashboard";
import Practice from "./pages/Practice";

const App = () => {
    return (
        <Router>
            <Dashboard path="/" />
            <Dashboard path="dashboard" />
            <Sessions path="sessions" />
            <Practice path="practice" />
        </Router>
    );
};

export default App;
