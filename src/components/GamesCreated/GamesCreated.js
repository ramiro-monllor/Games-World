import React from "react"
import { useSelector } from "react-redux"
import CreatedCards from "../CreatedCards/CreatedCards"
import "./GamesCreated.css"




export default function GamesCreated(){


    const created = useSelector(state => state.gamesCreated)

    return(
        <div className="todo-CG">
            <p className="titulo-CG">Games Created</p>
            <ul className="pagina-CG">
                {
                    created && created.map((e) => (
                        <CreatedCards 
                        id={e.id}
                        key={e.id}
                        title={e.title}
                        thumbnail={e.thumbnail}
                        genre={e.genre}
                        platform={e.platform}
                        creator={e.creator}
                        />
                    ))
                }
            </ul>
        </div>

    )
}