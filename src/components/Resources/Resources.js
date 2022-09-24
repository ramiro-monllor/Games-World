import React from "react"
import "./Resources.css"

import compu from "../../imagenes/compu.png"
import html from "../../imagenes/html.png"
import css from "../../imagenes/css.png"
import js from "../../imagenes/js.png"
import react from "../../imagenes/react.png"
import redux from "../../imagenes/redux.png"
import less from "../../imagenes/less.png"
import boots from "../../imagenes/boots.png"
import vercel from "../../imagenes/vercel.png"
import tailwind from "../../imagenes/tailwind.png"


export default function Resources(){

    return(
      <div className="blog-R">
          <div className="compu">
             <img className="imgR" src={compu} alt="compu"/>
          </div>
    <div className="container-img-R">
            <a href="https://developer.mozilla.org/es/docs/Web/HTML"><img className="imgR Ht" src={html} alt="html"/></a>
            <a href="https://developer.mozilla.org/es/docs/Web/CSS"><img className="imgR Css" src={css} alt="css"/></a>
            <a href="https://www.javascript.com/learn/strings"><img className="imgR Js" src={js} alt="js"/></a>
            <a href="https://es.reactjs.org/docs/getting-started.html"><img className="imgR Rt" src={react} alt="react"/></a>
            <a href="https://es.redux.js.org/docs/introduccion/"><img className="imgR Rx" src={redux} alt="redux"/></a>
            <a href="https://lesscss.org/usage/"><img className="imgR Lss" src={less} alt="less" /></a>
            <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/"><img className="imgR Bst" src={boots} alt="boots"/></a>
            <a href="https://vercel.com/home"><img className="imgR Vrl" src={vercel} alt="vercel"/></a>
            <a href="https://tailwindcss.com/docs/installation"><img className="imgR TW" src={tailwind} alt="tailwind"/></a>
    </div>
</div>
    )
}