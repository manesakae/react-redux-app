import React from 'react';
import {
    Link
} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/homepure">HomePure</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar