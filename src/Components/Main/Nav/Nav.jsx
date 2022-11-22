import React from 'react';
import "./Nav.css"
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="div_Nav">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to='/massage'>Massage</NavLink>
            <NavLink to="/photo">Photo</NavLink>
            <NavLink to="/video">Video</NavLink>
            <NavLink to="/audio">Audio</NavLink>
        </nav>
    )
}

export default Nav;