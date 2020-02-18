import React from 'react';

import './styles.scss';

class PostPreview extends React.Component{

    render() {
      const {title, text} = this.props;
      return (
        <article>
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
      )
    }
}

export default PostPreview;
