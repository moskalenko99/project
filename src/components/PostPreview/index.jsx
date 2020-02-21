import React from 'react';
import {
  Link
} from "react-router-dom";

import './styles.scss';

class PostPreview extends React.Component{
    render() {
      const {title, index} = this.props;
      return (
        <article>
          <h2>{title}</h2>
					<Link to={`/blog/${this.props.index}`}>Details</Link>
        </article>
      )
    }
}

export default PostPreview;
