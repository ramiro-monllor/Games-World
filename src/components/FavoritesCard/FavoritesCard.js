import React from "react"
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux"
import { removeFavorite } from "../../redux/actions";
import "./FavoritesCard.css"
import corazonroto from "../../imagenes/corazonroto.png"

import Swal from 'sweetalert2'


export default function FavoritesCard(props){
   
   let dispatch = useDispatch();

   const click = () => {
    dispatch(removeFavorite(props.id))
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    })
    Toast.fire({
      icon: 'error',
      iconColor: "#EE1313",
      title: 'Game removed from favorites',
      color: 'white',
			background: '#FE6C66',
    })
   }

    return(
<div className="card">
    <div className="header">
      <img src={props.thumbnail} alt={props.title} className="image"/>
      <div className="icon">
      <img onClick={click} className="corazoncito-fav" src={corazonroto} alt="corazon"/>
      </div>
    </div>
    <div className="text">
      <h1 className="title">
      {props.title}
      </h1>
      <i className="genre">{props.genre}</i>
      <i className="platform"> {props.platform}</i>
      <Link to={`/game/${props.id}`}><a className="btnD" style={{color:"white", fontFamily:'Franklin Gothic Medium', textDecoration:"none"}}>Details</a></Link>
    </div>
</div>
 )
} 