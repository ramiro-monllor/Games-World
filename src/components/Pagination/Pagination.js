import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { next, prev, setPage } from "../../redux/actions";
import "./Pagination.css"

export default function Pagination(){

const gamesPerPage = useSelector(state => state.gamesPerPage)
const currentPage = useSelector(state => state.currentPage)
const total = useSelector(state => state.games)
const totalGames = total.length

    let pages = [];

    for(let i = 1; i<= Math.ceil(totalGames/gamesPerPage); i++){
        pages.push(i)
    }

    let dispatch = useDispatch();

    return(
        <div className="paginita">
            <button className="botoncitosP" onClick={() => dispatch(prev())}>PREV</button>
            {
                pages.map((page, index) => {
                    return <button 
                    key={index} onClick={() => dispatch(setPage(page))}
                    className={page === currentPage ? "active" : ""}>
                    {page}
                    </button>;
                })
            }
            <button className="botoncitosP" onClick={() => dispatch(next())}>NEXT</button>
        </div>
    )
}