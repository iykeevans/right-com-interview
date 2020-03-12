import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/Layout/NavBar";
import SideBar from "./components/Layout/SideNav";
import Content from "./components/Content";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <div className="app">
              <NavBar />
              <SideBar />
              <Content />
              <Footer />
            </div>
          )}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
