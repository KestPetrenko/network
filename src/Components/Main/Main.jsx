import React from 'react';
import "./Main.css";
import Nav from "./Nav/Nav";
import Section_center from "./Section_center/Section_center";
import {Route, Routes} from "react-router-dom";
import Massage from "./Section_center/Massage/Massage";
import Home from "./Section_center/Home/Home";
import Friends from "./Section_center/Friends/Friends";
import Video from "./Section_center/Video/Video";
import Audio from "./Section_center/Audio/Audio";
import Photo from "./Section_center/Photo/Photo";

const Main = () => {
    return (
        <div className="main1">
            <Nav/>
            <Section_center>
                <Routes>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/massage' element={<Massage/>}/>
                    <Route path='/friends' element={<Friends/>}/>
                    <Route path='/photo' element={<Photo/>}/>
                    <Route path='/video' element={<Video/>}/>
                    <Route path='/audio' element={<Audio/>}/>
                </Routes>
            </Section_center>
        </div>
    )
}

export default Main;