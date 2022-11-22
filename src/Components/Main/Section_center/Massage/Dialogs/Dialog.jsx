import React from "react";
import {NavLink} from "react-router-dom";
import "./Dialog.css"


const Dialog = (props) => {
    let path = '/massage/' + props.id;
    return (
        <div className="div_dialog">
            <h2>{props.name} <br/> {props.lastname}</h2>
            <NavLink to={path}>{props.text}</NavLink>
        </div>
    )
}
export default Dialog