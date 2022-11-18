import React from 'react';
import "./Audio.css";
import audio1 from "./audio/01. Кест - Быть с тобой.mp3";
import audio2 from "./audio/02. Кест & Олег Безъязыков - Не Из Золота.mp3";
import audio3 from "./audio/03. Кест,Алена Дождь - Остров Вечной Весны.mp3";
import audio4 from "./audio/04. Кест - Бегут года.mp3";
import audio5 from "./audio/05. Кест - Как нелегко идти.mp3";
import audio6 from "./audio/06. Кест,Сергей Чуйко - Криминал.mp3";
import audio7 from "./audio/07. Кест - Не губите.mp3";
import audio8 from "./audio/08. Кест - Не уснуть.mp3";
import audio9 from "./audio/09. Кест, Сергей Чуйко - Мани-лавандосы.mp3";
import audio10 from "./audio/10. Кест, Сергей Чуйко - Девчонки.mp3";
import audio11 from "./audio/11. Кест - Я по жизни поэт.mp3";

const Audio = () => {
    return (
        <div className="container_audio">
            <div className="div_music">
                <p>01. Кест - Быть с тобой.mp3</p>
                <audio controls src={audio1} className="music1"></audio>
            </div>
            <div className="div_music">
                <p>02. Кест & Олег Безъязыков - Не Из Золота.mp3</p>
                <audio  controls src={audio2} className="music1"></audio>
            </div>
            <div className="div_music">
                <p>03. Кест,Алена Дождь - Остров Вечной Весны.mp3</p>
                <audio  controls src={audio3} className="music1"></audio>
            </div>
            <div className="div_music">
                <p>04. Кест - Бегут года.mp3</p>
                <audio  controls src={audio4} className="music1"></audio>
            </div>
            <div className="div_music">
                <p>05. Кест - Как нелегко идти.mp3</p>
                <audio  controls src={audio5} className="music1"></audio>
            </div>
            <div className="div_music">
                <p>06. Кест,Сергей Чуйко - Криминал.mp3</p>
                <audio  controls src={audio6} className="music1"></audio>
            </div>
            <div className="div_music">
                <p>07. Кест - Не губите.mp3</p>
                <audio  controls src={audio7} className="music1"></audio>
            </div>
            <div className="div_music">
                <p>08. Кест - Не уснуть.mp3</p>
                <audio controls src={audio8} className="music1"></audio>
            </div>
            <div className="div_music">
                <p>09. Кест, Сергей Чуйко - Мани-лавандосы.mp3</p>
                <audio controls src={audio9} className="music1"></audio>
            </div>
            <div className="div_music">
                <p>10. Кест, Сергей Чуйко - Девчонки.mp3</p>
                <audio controls src={audio10} className="music1"></audio>
            </div>
            <div className="div_music">
                <p>11. Кест - Я по жизни поэт.mp3</p>
                <audio  controls src={audio11} className="music1"></audio>
            </div>


        </div>
    )
}

export default Audio
