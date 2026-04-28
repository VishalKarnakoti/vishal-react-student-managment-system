rd /s /q node_modules
del package-lock.json

npm cache clean --force

npm install

npm install react-router-dom
import React from 'react';
import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <nav>
            <ul>
                <li><Link to="/register">Registration</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;