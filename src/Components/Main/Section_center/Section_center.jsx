import React from 'react';
import "./Section_center.css"

const Section_center = (props) => {
    return (
        <div className="div_Section_center">
            {props.children}
        </div>
    )
}

export default Section_center;