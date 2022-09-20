export const GET_GAMES = "GET_GAMES";
export const GET_GAME_DETAIL = "GET_GAME_DETAIL";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const SET_PAGE = "SET_PAGE";
export const PREV = "PREV";
export const NEXT = "NEXT";
export const CREATE_GAME = "CREATE_GAME";
export const REMOVE_CREATED = "REMOVE_CREATED";
export const FILTER_PLATFORM = "FILTER_PLATFORM";
export const FILTER_GENRE = "FILTER_GENRE";
export const ORDER_AZ = "ORDER_AZ";
export const ORDER_ZA = "ORDER_ZA";

let id = 1000;

export function getGames (){
    return function(dispatch){
        return fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '35b5d0a575msh24e898241553961p19c149jsn0e3942731f7e',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(resp => {
            dispatch({type: GET_GAMES, payload: resp})
        })
    }
}

export function getGameDetail (id){
    return function(dispatch){
        return fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '35b5d0a575msh24e898241553961p19c149jsn0e3942731f7e',
		        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(resp => {
            dispatch({type: GET_GAME_DETAIL, payload: resp})
        })
    }
}

export function filterPlatform(platform){
    return({
        type: FILTER_PLATFORM,
        payload: platform
    })
}

export function filterGenre(genre){
    return({
        type: FILTER_GENRE,
        payload: genre
    })
}

export function orderAZ(az){
    return({
        type: ORDER_AZ,
        payload: az
    })
}

export function orderZA(za){
    return({
        type: ORDER_ZA,
        payload: za
    })
}

export function addFavorite(game){
    return({
        type: ADD_FAVORITE,
        payload: game
    })
}

export function removeFavorite(game){
    return({
        type: REMOVE_FAVORITE,
        payload: game
    })
}

export function setPage(page){
    return({
        type: SET_PAGE,
        payload: page
    })
}

export function prev(less){
    return({
        type: PREV,
        payload: less
    })
}

export function next(more){
    return({
        type: NEXT,
        payload: more
    })
}

export function createGame(game){
    return({
        type: CREATE_GAME,
        payload:{
            ...game,
            id: id++
        }
    })
}

export function removeCreated(remove){
    return({
        type: REMOVE_CREATED,
        payload: remove
    })
}