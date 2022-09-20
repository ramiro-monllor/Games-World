import React from "react"
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux"
import { addFavorite } from "../../redux/actions";
import "./GamesCard.css"
import corazon from "../../imagenes/corazon.png"

import Swal from 'sweetalert2'

export default function GamesCard(props){
   
   let dispatch = useDispatch();

   const click = () => {
    dispatch(addFavorite({
      id:props.id,
      key:props.id,
      title:props.title,
      thumbnail:props.thumbnail,
      genre:props.genre,
      platform:props.platform
    }))
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    })
    Toast.fire({
      icon: 'success',
      title: 'Game added to favorites'
    })
   }

    return(
<div className="card">
    <div className="header">
      <img src={props.thumbnail} alt={props.title} className="image"/>
      <div className="icon">
      <img onClick={click} className="corazoncito" src={corazon} alt="corazon"/>
      </div>
    </div>
    <div className="text">
      <h1 className="title">
      {props.title} 
      </h1>
      <i className="genre">{props.genre}</i>
      <i className="platform"> {props.platform}</i>
      <Link to={`/game/${props.id}`}><a className="btnF" style={{color:"white", fontFamily:'Franklin Gothic Medium', textDecoration:"none"}}>Details</a></Link>
    </div>
</div>
 )
} 

