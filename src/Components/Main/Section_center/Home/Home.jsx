import React from 'react';
import "./Home.css";

import photo from "./img/photo.jpg";

const Home = () => {
    return (
        <div className="div_home">
            <div className="div_my_inform">
                <div className="name">
                    <img src={photo} alt="you" className="my_photo"/>
                    <h1 className="title_name">Konstantin Petrenko</h1>
                </div>
                <h2>Информация</h2>
                <p>
                    Дата рождения: 08.01.1992г.<br/>
                    Родной город: Сумы<br/>
                    Город проживания: Киев<br/>
                    Школа: №15 г.Сумы<br/>
                    Учебное заведение: СумДу<br/>
                </p>
                <h2>About</h2>
                <p>Lorem <br/>
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
                <h2>About</h2>
                <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
                <h2>About</h2>
                <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
            </div>
        </div>
    )
}

export default Home
