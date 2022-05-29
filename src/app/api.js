import axios from "axios";

const catsAPI = {
    options: {
        headers: {
            'x-api-key': '07e68072-698c-4563-a07e-2f26498868fb',
        }
    },
    getCats(limit = 20, page = 0, order = "Rand") {
        return axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=${order}`, this.options)
            .then(res => {
                return res.data;
            })
    },
    addFav(imgId, subId="1"){
        const data={
            image_id:imgId,
            sub_id:subId,
        }
        return axios.post("https://api.thecatapi.com/v1/favourites", data, this.options)
            .then(res=>{
                return res.data;
            })
    },
    deleteFav(imgId){
        return axios.delete(`https://api.thecatapi.com/v1/favourites/${imgId}`, this.options)
            .then(res=>{
                return res.data;
            })
    },
    getFavCats() {
        return axios.get(`https://api.thecatapi.com/v1/favourites`, this.options)
            .then(res => {
                return res.data;
            })
    },
}

export default catsAPI