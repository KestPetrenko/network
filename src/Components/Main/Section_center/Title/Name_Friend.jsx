import React from 'react';
import "./Name-Friend.css";
import photo from "../Home/img/photo.jpg";

const Name_Friend = () => {
    return (
        <div className="name">
            <img src={photo} alt="you" className="my_photo"/>
            <h1 className="title_name">Konstantin Petrenko</h1>
            <button className="button_follow">Follow</button>
        </div>
    )
}

export default Name_Friend