
import React from "react";
import { hot } from 'react-hot-loader/root';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CatalogPage from './pages/CatalogPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <CatalogPage />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default hot(App);
