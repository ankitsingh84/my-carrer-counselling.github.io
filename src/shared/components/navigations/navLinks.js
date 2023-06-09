import React from "react";
import {NavLink} from 'react-router-dom'

import './navLinks.css';

const NavLinks = props =>{
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
            <NavLink to="/users">Users</NavLink>
        </li>
        <li>
            <NavLink to="/testimonials">Testimonmials</NavLink>
        </li>
        <li>
            <NavLink to="/auth">Login</NavLink>
        </li>
    </ul>
}

export default NavLinks;