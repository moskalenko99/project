import React from 'react';

import './styles.scss';

class HomePage extends React.Component{

    state = {
        count: 1
    }

    render(){
        return(
            <h1>HomePage</h1>
        );
    }
}

export default HomePage;