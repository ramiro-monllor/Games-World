import React from "react";
import img from "../../imagenes/logo psd.png"
import git from "../../imagenes/github.png"
import linkedin from "../../imagenes/linkedin.png"
import { NavLink } from 'react-router-dom';
import { useState } from "react";

import "./NavBar.css"

export default function Nav2(){

    const [isActive, setActive] = useState("false");

    function handleToggle(){
        setActive(!isActive);
    }

    return(
        <div className="page">
        {/* <header tabindex="0"> */}
        <header>
          <NavLink to="/home"><img src={img} alt="logo" width="60" height="60"/>
          <a style={{color: "white"}}>Game World</a>
          </NavLink>
          </header>

          <div className={`tocador ${isActive ? "" : "active"}`} onClick={handleToggle}></div>
            <div className={`sliderbar ${isActive ? "" : "active"}`} onClick={handleToggle}>
            <ul>
            <NavLink to="/home" style={{color: "black"}}><li><a>Home</a></li></NavLink>
            <NavLink to="/favs" style={{color: "black"}}><li><a>Favorites</a></li></NavLink>
            <NavLink to="/gamescreated" style={{color: "black"}}><li><a>Games Created</a></li></NavLink>
            <NavLink to="/create" style={{color: "black"}}><li><a>Create Game</a></li></NavLink>
            <NavLink to="/about" style={{color: "rgb(118, 118, 130)"}}><li className="aboutcito"><a><i>About</i></a></li></NavLink>
            <NavLink to="/resources" style={{color: "rgb(118, 118, 130)"}}><li><a><i>Resources</i></a></li></NavLink>
             <li className="small">
              <a href="https://www.linkedin.com/in/ramiro-monllor/">RAMI<img src={linkedin} alt="logo linkedin" width="14" height="14" style={{marginLeft: "5px"}}/></a>
              <a href="https://github.com/ramiro-monllor"><img src={git} alt="logo git" width="14" height="14" style={{marginLeft: "-5px"}}/></a>
              <a href="https://www.linkedin.com/in/facundo-monllor/">FACU<img src={linkedin} alt="logo linkedin" width="14" height="14"style={{marginLeft: "5px"}}/></a>
              <a href="https://github.com/facundo-monllor"><img src={git} alt="logo git" width="14" height="14" style={{marginLeft: "-5px"}}/></a>
             </li>
            </ul>
            </div>
            
          

        </div>
    )
}