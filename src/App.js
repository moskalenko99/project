
import React from "react";
import { hot } from 'react-hot-loader/root';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './components/Navigation';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';

class App extends React.Component {
  render() {
    return(
      <Router>
        <Navigation />
        <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
						<Route path="/blog/:index">
              <PostPage />
            </Route>
            <Route path="/blog">
              <BlogPage />
            </Route>
          </Switch>
      </Router>
    )
  }
}

export default hot(App);
