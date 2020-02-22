import React from 'react';
import PostPreview from './../../components/PostPreview'

import './styles.scss';

class BlogPage extends React.Component{

    state = {
        list: []
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(list => this.setState({ list }))
    };

    render(){
        return(
            <React.Fragment>
                <h1>BlogPage</h1>
                <section>
                    {this.state.list.map((post, index) => (
                        <PostPreview 
                            title={post.title} 
                            description={post.body}
                            index={index} 
                        />
                    ))}
                </section>
            </React.Fragment>
        );
    }
}

export default BlogPage;
