import React from "react"
import { useDispatch } from "react-redux"
import { removeCreated } from "../../redux/actions";
import "./CreatedCards.css"
import basura from "../../imagenes/basura.png"

import Swal from 'sweetalert2'

export default function CreatedCards(props){
   
   let dispatch = useDispatch();

   const click = () => {
    dispatch(removeCreated(props.id))
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
      title: 'Game removed from games created',
      color: 'white',
			background: '#FE6C66'
    })
   }

    return(
<div className="card-CG">
    <div className="header-CG">
      <img src={props.thumbnail} alt={props.title} className="image-CG"/>
      <div className="icon-CG">
      <img onClick={click} className="basura-CG" src={basura} alt="basura"/>
      </div>
    </div>
    <div className="text-CG">
      <h1 className="title-CG">
      {props.title}
      </h1>
      <i className="genre-CG">{props.genre}</i>
      <i className="platform-CG"> {props.platform}</i>
      <i className="creator-CG"> By: {props.creator}</i>
    </div>
</div>
 )
} 