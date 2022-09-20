import {GET_GAMES, GET_GAME_DETAIL, ADD_FAVORITE, REMOVE_FAVORITE, SET_PAGE, PREV, NEXT, CREATE_GAME, REMOVE_CREATED, FILTER_PLATFORM, FILTER_GENRE, ORDER_AZ, ORDER_ZA} from "../actions/index"


const initialState = {
    games: [],
    gameDetail: {},
    gameFavorites: [],
    gamesPerPage: 12,
    currentPage: 1,
    gamesCreated: [],
    filteredItems: [],
    platform: ""
}

export default function rootReducer(state = initialState, action ){
    switch(action.type){
        case GET_GAMES:
            return{
                ...state,
                games: action.payload
            }
        case GET_GAME_DETAIL:
            return{
                ...state,
                gameDetail: action.payload
            }
        case ADD_FAVORITE:
            return{
                ...state,
                gameFavorites: state.gameFavorites.concat(action.payload)
            }
        case REMOVE_FAVORITE:
            return{
                ...state,
                gameFavorites: state.gameFavorites.filter((e) => e.id !== action.payload)
            }
        case SET_PAGE:
            return{
                ...state,
                currentPage: action.payload
            }
        case PREV:
            return{
                ...state,
                currentPage: state.currentPage-1
            }
       case NEXT:
            return{  
                ...state,
                currentPage: state.currentPage+1
            }
        case CREATE_GAME:
            return{
                ...state,
                gamesCreated: state.gamesCreated.concat(action.payload)
            }
        case REMOVE_CREATED:
            return{
                ...state,
                gamesCreated: state.gamesCreated.filter((e) => e.id !== action.payload)
            }
        case FILTER_PLATFORM:
            return{
                ...state,
                games: state.games.filter((e) => e.platform === action.payload)
            }
        case FILTER_GENRE:
            return{
                ...state,
                games: state.games.filter((e) => e.genre === action.payload)
            }
         case ORDER_AZ:
            return{
                ...state,
                games: state.games.sort((a, b ) =>
                {
                  if ( a.title.toLowerCase() < b.title.toLowerCase()){
                    return -1;
                  }
                  if ( a.title.toLowerCase() > b.title.toLowerCase()){
                    return 1;
                  }
                  return 0;
              })
            }
        case ORDER_ZA:
            return{
                ...state,
                games: state.games.sort((b, a) => a.title.localeCompare(b.tilte))
            }
        default:
            return {...state}
    }
}