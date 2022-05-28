import axios from "axios";

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
                cats: action.cats,
            }
        }
        default:
            return state;
    }
}

////////////////////////////// Thunks ///////////////////////////////////////////////////////////////

const catsAPI = (limit = 10, page = 0, order = "Rand") => {
    const options = {
        headers: {
            'x-api-key': '07e68072-698c-4563-a07e-2f26498868fb',
        }
    };
    return axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=${order}`, options)
        .then(res => {
            return res.data
        })
}

export const getCatsThunk = () => {
    return (dispatch) => {
        catsAPI().then(data => {
            dispatch({type: "SET_CATS", cats: data})
        })
    }
}


export default appReducer