import catsAPI from "./api";

const INITIAL_STATE = {
    started: false,
    cats: [],
    favCats: [],
    pageInfo: {},
}
const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_CATS": {
            return {
                ...state,
                cats: [...state.cats, ...action.cats],
            }
        }
        case "SET_FAV_CATS": {
            return {
                ...state,
                favCats: action.favCats,
            }
        }
        case "APP_STARTED":{
            return {
                ...state,
                started: true,
            }
        }
        default:
            return state;
    }
}

////////////////////////////// Thunks ///////////////////////////////////////////////////////////////

export const getCatsThunk = () => {
    return (dispatch) => {
        catsAPI.getCats().then(data => {
            dispatch({type: "SET_CATS", cats: data})
        })
    }
}

export const getFavCatsThunk = () => {
    return (dispatch) => {
        catsAPI.getFavCats().then(data => {
            dispatch({type: "SET_FAV_CATS", favCats: data})
        })
    }
}

export const addFavThunk = (imgId) =>{
    return (dispatch)=>{
        catsAPI.addFav(imgId).then((data)=>{
            dispatch(getFavCatsThunk());
        })
    }
}
export const deleteFavThunk = (imgId) =>{
    return (dispatch)=>{
        catsAPI.deleteFav(imgId).then((data)=>{
            dispatch(getFavCatsThunk());
        })
    }
}

export const startApp=()=>{
    return (dispatch)=>{
        dispatch({type:"APP_STARTED"})
        dispatch(getCatsThunk());
        dispatch(getFavCatsThunk());
    }
}


export default appReducer