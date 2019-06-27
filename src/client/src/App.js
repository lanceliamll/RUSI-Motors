import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loadUser } from "./actions/authActions";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Navigation from "./components/layout/Navigation";
import Products from "./components/products/Products";
import PrivateRoute from "./components/routing/PrivateRoute";
import setAuthToken from "./helpers/setAuthToken";
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

class App extends Component {
  componentDidMount() {
    if (localStorage.token) {
      store.dispatch(loadUser());
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Fragment>
              <Navigation />
              <Route exact path="/" component={Landing} />
              <div>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Switch>
                  <PrivateRoute exact path="/products" component={Products} />
                </Switch>
              </div>
              <Footer />
            </Fragment>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
