import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getGameDetail } from "../../redux/actions";
import { NavLink } from "react-router-dom";

import flecha from "../../imagenes/flecha.png"
import "./GameDetail.css"

export default function GameDetail(){
    
    let dispatch = useDispatch()
    let params = useParams()

    const detail = useSelector(state => state.gameDetail)

    React.useEffect(() => {
        // console.log("gola")
        dispatch(getGameDetail(params.id))
    })
    
    return(
    <div className="ficha" id="bright">
  <div className="informacion">
    <div className="encabezad">
    <h1 style={{fontFamily:"'Lucida Sans'"}}><NavLink to="/"><img src={flecha} style={{height:"40px", marginTop:"-7px"}} alt="flecha"></img></NavLink>  {detail.title}</h1>
      <h4 className="data" style={{fontFamily: 'Franklin Gothic Medium', color:"#288FFF"}}>{detail.release_date}</h4>
      <span className="caract" style={{fontFamily: 'Cambria, Cochin', width:"200px"}}>{detail.genre}, {detail.platform}</span>
      <span className="caract" style={{fontFamily: 'Cambria, Cochin', width:"200px"}}>{detail.publisher}, {detail.developer}</span>
    </div>
    <div className="desc">
      <p className="text" style={{fontFamily: 'Franklin Gothic Medium', fontSize:"24px"}}>
        {detail.short_description} 
      </p>
    </div>
    <a className="tipo" href={detail.game_url} style={{marginLeft:"45px",color:"#ffa1aa", fontSize:"24px", fontFamily:"cursive"}}>Click here to play!</a>
  </div>
  <img className="blur_back bright_back" src={detail.thumbnail} alt="thumbnail"></img>
</div>
    )
}