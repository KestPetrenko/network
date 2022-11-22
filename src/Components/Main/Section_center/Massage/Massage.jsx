import React from 'react';
import "./Massage.css";
import Dialog from "./Dialogs/Dialog";

let dialogs = [
    {
        id: 1,
        name: "Ira",
        lastname: "Petrov",
    },
    {
        id: 2,
        name: "Vita",
        lastname: "Petrov",
    },
    {
        id: 3,
        name: "Tatyana",
        lastname: "Petrov",
    },

    {
        id: 4,
        name: "Alex",
        lastname: "Petrov",
    },

    {
        id: 5,
        name: "Sergey",
        lastname: "Petrov",
    },
]

let textmessage = [
    {id:1, text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "},
    {id:2, text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "},
    {id:3, text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "},
    {id:4, text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem v"},
    {id:5, text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem "},
]

let dialogFriend = dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name} lastname={dialog.lastname} massage={dialog.massage}/>)
let textFriend = textmessage.map(mass => <Dialog id={mass.id} text={mass.text}/>)

const Massage = () => {
    return (
        <div className="div_massage">
            <div className="div_name">
                {dialogFriend}
            </div>
            <div className="div_text">
                {textFriend}
            </div>
        </div>

    )
}

export default Massage
