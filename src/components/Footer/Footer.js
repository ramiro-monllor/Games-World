import React from "react"
import { NavLink } from "react-router-dom"
import "./Footer.css"



export default function Footer(){
    return(
<section>
  <footer className="footer-p" >
    <div className="container">
      <section>
        <p className="position">
          <span className="margin"><NavLink style={{color:"white", marginLeft:"50px", fontFamily: "system-ui"}} to="/about">About</NavLink></span>
          <span className="margin"><NavLink style={{color:"white", fontFamily: "system-ui"}} to="/resources">Resources</NavLink></span>
        </p>
      </section>
    </div>

    <div className="nosotros" style={{paddingLeft:"60px", fontFamily: "cursive"}}>Creado por: Rami y Facu 🚀🚀</div>
  </footer>
</section>
    )}