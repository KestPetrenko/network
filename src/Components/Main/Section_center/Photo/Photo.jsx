import React from 'react'
import "./Photo.css"
import photo1 from "./img/1.jpg"
import photo2 from "./img/2.jpg"

const Photo = () => {
    return (
        <div className="div_photo">
            <img src={photo1} className="photo1"/>
            <img src={photo2} className="photo2"/>
        </div>
    )
}

export default Photo
