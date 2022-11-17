import React from 'react';
import './Header.css';
import photo from "./img/photo.png"
import background  from "./img/fone.jpg"

const Header = () => {
    return (
        <div className="header" style={{ backgroundImage: `url(${background})` }}>
            <img src={photo} alt="you" className="photo"/>
            <p>Title</p>
        </div>
    )
}

export default Header;