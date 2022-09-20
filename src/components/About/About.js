import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./About.css"
import imagen from "../../imagenes/fotito.jpg"


export default function About(){

    const [input,setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setInput("")
    }

    return(
      <div className="blog">
          <div className="img-cont">
             <img className="imgA" src={imagen} alt="foto"/>
          </div>
  <div className="container-text">
    <h3 className="h3A">September 2022.</h3>
    <h1 className="h1A">About...</h1>
    <p className="pA" style={{fontSize: "18px"}}><strong className="tamaño">“GameWorld”</strong> es un mini proyecto creado por <i className="tamaño">Facundo Monllor</i> y <i className="tamaño">Ramiro Monllor</i>, con el uso de distintos lenguajes, frameworks y herramientas <NavLink to="/resources" style={{color:"red", fontSize:"18px", fontFamily: "system-ui"}}>(ver aquí)</NavLink>, este proyecto se trata sobre una app conectada a una API de la cual consume sus datos para mostrar juegos, filtrarlos, elegir tus favoritos como también la posibilidad de crear los tuyos.
Fue diseñado y construido con mucha dedicación y esfuerzo, esperamos que les encante y estamos contentos de recibir sus opiniones aquí debajo.</p>

    <form onSubmit={handleSubmit}>
    <input className="btn-input" style={{fontSize: "12px"}} value={input} type="text" placeholder="Write your opinion..." onChange={(e) => setInput(e.target.value)}></input>
    <button type="submit" className="btn-submit" style={{fontSize: "12px"}}>Submit</button>
    </form>

  </div>
</div>
    )
}