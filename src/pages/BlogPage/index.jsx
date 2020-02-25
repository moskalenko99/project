import React from 'react';
import PostPreview from './../../components/PostPreview'

import './styles.scss';

class BlogPage extends React.Component{

    section = React.createRef();

    state = {
        list: []
    };

    constructor(props){
        super(props);

        console.log("CONSTRUCTOR", this.section);
        
    }

    componentDidMount() {
        console.log('REF', this.section);
        
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(list => this.setState({ list }))
    };

    render(){
        return(
            <React.Fragment>
                <h1>BlogPage</h1>
                <section ref={this.section}>
                    {this.state.list.map((post, index) => (
                        <PostPreview 
                            key={`PostPreview-${post.title}-${index}`}
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
