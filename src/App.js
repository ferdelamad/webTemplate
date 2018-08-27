import React, { Component } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import News from "./Components/News";
import NavBar from "./Components/CustomNavbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/html5-device-mockups/dist/device-mockups.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
        </div>
      </Router>
    );
  }
}

export default App;
