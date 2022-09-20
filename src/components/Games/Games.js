import React, { useState } from "react";
import { getGames} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import GamesCard from "../GamesCard/GamesCard";
import "./Games.css"
import { connectStorageEmulator } from "firebase/storage";

export default function Games(){

    const currentPage = useSelector(state => state.currentPage)
    const gamesPerPage = useSelector(state => state.gamesPerPage)
    const games = useSelector(state => state.games)
    
    const lastGameIndex = currentPage * gamesPerPage;
    const firstGameIndex = lastGameIndex - gamesPerPage;
    
    const [search,setSearch] = useState("");
    
    const searcher = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }
    

    let results = []
    if(!search)
    {
        results = games
    }else{
        results = games.filter ( (dato) => 
        dato.title.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }
    
    const currentGames = results.slice(firstGameIndex,lastGameIndex)


    const vaciar = () => {
        setSearch("")
    }
    

    let dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getGames())
    },[])

    return(
        <div>
            <ul className="pagina">
                <div className="custom-search">
                <input value={search} onChange={searcher} type="text" className="custom-search-input" placeholder="Search games..."/>
                <button className="custom-search-botton" type="submit" onClick={vaciar}>X</button>  
                <div className="content-select">
            </div>
          
   
            </div>

                {
                    currentGames && currentGames.map((e) => (
                        <GamesCard 
                        id={e.id}
                        key={e.id}
                        title={e.title}
                        thumbnail={e.thumbnail}
                        genre={e.genre}
                        platform={e.platform}
                        release_date={e.release_date}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

