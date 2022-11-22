import React from "react";
import Friends from "./Friends";
import "./Friends.css";
import photo1 from "./img/1.png";
import photo2 from "./img/2.png";
import photo3 from "./img/3.png";
import photo4 from "./img/4.png";
import photo5 from "./img/5.png";
import photo6 from "./img/6.png";
import photo7 from "./img/7.png";
import photo8 from "./img/8.png";
import photo9 from "./img/9.png";
import photo10 from "./img/10.png";

let posts = [
    {id:1, photo: photo1, name: "Violet", lastname: "Terry"},
    {id:2, photo: photo2, name: "Meagan", lastname: "Daniels"},
    {id:3, photo: photo3, name: "Jonathan", lastname: "Singleton"},
    {id:4, photo: photo4, name: "Christian", lastname: "Brown"},
    {id:5, photo: photo5, name: "Elwin", lastname: "Merritt"},
    {id:6, photo: photo6, name: "Rolf", lastname: "Blankenship"},
    {id:7, photo: photo7, name: "Joan", lastname: "Henry"},
    {id:8, photo: photo8, name: "Grace", lastname: "Ellis "},
    {id:9, photo: photo9, name: "Donald", lastname: "Ramsey "},
    {id:10, photo: photo10, name: "Bethany", lastname: "Gibbs"},
]

let postFriends = posts.map(post => <Friends id={post.id} photo={post.photo} name={post.name} lastname={post.lastname}/>)

const Posts = () => {
    return (
        <div className="div_friends_inform">
            {postFriends}
        </div>
    )
}

export default Posts