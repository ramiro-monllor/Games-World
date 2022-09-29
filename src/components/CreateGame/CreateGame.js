import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGame } from "../../redux/actions";
import personajes from "../../imagenes/personajes.png"
import "./CreateGame.css"

import { uploadFile } from "../../firebase/firebase-config";

import Swal from 'sweetalert2'


export default function CreateGame(){

const [input, setInput] = useState({
    title: "",
    genre: "",
    platform: "",
    thumbnail: "",
    creator: "",
})

const change = (e) => {
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })    
}

const changeI = (e) => {
  uploadFile(e.target.files[0])
  setInput({
      ...input,
      [e.target.name] : e.target.value
  })    
}

let dispatch = useDispatch()

const send = (e) => {
    e.preventDefault()
    dispatch(createGame(input))
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    })
    Toast.fire({
      icon: 'success',
      iconColor: "#8EFF60",
      title: 'Game created successfully',
      color: 'white',
			background: '#FECE66',
    })
    setInput({
        title: "",
        genre: "",
        platform: "",
        thumbnail: "",
        creator: ""
    })
}

    return(
  <div className="crearJuego">
    <div className="infoC">
    <h2 className="h2C">The Best Games Web</h2>
    <i className="icon ion-ios-ionic-outline"></i>
    {/* <p>holaaa{input.genre}</p> */} 
    {/* <p class="pC" >Upload a image...</p> */}
    <img src={personajes} className="thumbnailC" alt="personaje"/>
    <p className="pC" >Upload a image...</p>
    <form style={{marginTop:"-60px"}}>
        <ul>
          <li>
           <label for="thumbnail"></label>
           <input type="text" className="inputImagen" id="thumbnail" name="thumbnail" placeholder="URL Image..." value={input.thumbnail} required onChange={change}/>
           {/* <input type="file" className="inputImagen" id="thumbnail" name="thumbnail" value={input.thumbnail} required onChange={changeI}/> */}
          </li>
        </ul>
    </form>
    
  </div>
  {/* <form action="#" method="POST" class="signupForm" name="signupform">  */}
  <form className="juegoForm" name="juegoForm" onSubmit={send}>
    <h2>Create your Game</h2>
    <ul className="datos">
      <li>
        <label for="title"></label>
        <input type="text" className="inputDatos" id="title" name="title" placeholder="Title..." value={input.title} required onChange={change}/>
      </li>
      <li>
        <label for="genre"></label>
        <input type="text" className="inputDatos" id="genre" name="genre" placeholder="Genre..." value={input.genre} required onChange={change}/>
      </li>
      <li>
        <label for="platform"></label>
        <input type="text" className="inputDatos" id="platform" name="platform" placeholder="Platform..." value={input.platform} required onChange={change}/>
      </li>
      <li>
        <label for="creator"></label>
        <input type="text" className="inputDatos" id="creator" name="creator" placeholder="Created by..." value={input.creator} required onChange={change}/>
      </li>
      <li id="btnC">
        <input type="submit" id="btnC-create" name="btnC" alt="btnC" value="Create Game"/>
      </li>
    </ul>
  </form>
</div>
    )
}

