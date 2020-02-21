import React from 'react';
import { withRouter } from "react-router";
import PostPreview from './../../components/PostPreview';

import './styles.scss';

class PostPage extends React.Component {
  state = {
    post: null
  };

  componentDidMount = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.index}`)
      .then(response => response.json())
      .then(post => {
        this.setState({ post });
      });
  };

  render = () => this.state.post ? (
    <React.Fragment>
      <h1>PostPage: {this.state.post.title}</h1>
      <p>{this.state.post.body}</p>
    </React.Fragment>
  ) : null;
}

export default withRouter(PostPage);