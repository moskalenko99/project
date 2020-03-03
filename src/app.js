
import React from "react";
import { hot } from 'react-hot-loader/root';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <CatalogPage />
          </Route>
          <Route  path="/:id">
            <ProductPage />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default hot(App);
