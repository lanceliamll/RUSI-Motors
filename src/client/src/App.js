import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Navigation from "./components/layout/Navigation";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Fragment>
              <Navigation />

              <Route exact path="/" component={Landing} />
              <div>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </div>

              <Footer />
            </Fragment>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
