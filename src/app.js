
import React from "react";
import { hot } from 'react-hot-loader/root';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './components/Navigation';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

class App extends React.Component {
  render() {
    return(
      <Router>
        <Navigation />
        <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
      </Router>
    )
  }
}

export default hot(App);
