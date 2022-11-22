import React from 'react';
import "./Friends.css";
import {NavLink} from "react-router-dom";

const Friends = (props) => {
    let path = '/friends/' + props.name + props.lastname;
    return (
        <div>
            <div className="friend">
                <img src={props.photo} className="photo_friend"/>
                <NavLink className="title_name" to={path}>{props.name} {props.lastname}</NavLink>
                <button className="button_follow">Follow</button>
            </div>
        </div>
    )
}

export default Friends
