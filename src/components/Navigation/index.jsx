import React from 'react';
import {
    Link
} from "react-router-dom";

import './styles.scss';

class Navigation extends React.Component{
    render() {
        return (
            <nav className="Navigation">
                <Link className="Navigation__link" to="/">Home</Link>
                <Link className="Navigation__link" to="/blog">Blog</Link>
            </nav>
        )
    }
}

export default Navigation;