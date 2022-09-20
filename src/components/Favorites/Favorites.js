import React from "react"
import { useSelector } from "react-redux"
import FavoritesCard from "../FavoritesCard/FavoritesCard"
import "./Favorites.css"




export default function Favorites(){


    const favorites = useSelector(state => state.gameFavorites)
    // const favorites2 = [...new Set(favorites)]
    // console.log(favorites2)


    return(
        <div className="todo">
            <p className="tituloF">Favorites</p>
            <ul className="paginaF">
                {
                    favorites && favorites.map((e) => (
                        <FavoritesCard 
                        id={e.id}
                        key={e.id}
                        title={e.title}
                        thumbnail={e.thumbnail}
                        genre={e.genre}
                        platform={e.platform}
                        />
                    ))
                }
            </ul>
        </div>

    )
}