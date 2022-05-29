import axios from "axios";

const catsAPI = {
    options: {
        headers: {
            'x-api-key': '07e68072-698c-4563-a07e-2f26498868fb',
        }
    },
    async getCats(limit = 20, page = 0, order = "Rand") {
        const res = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=${order}`, this.options)
        return res.data;
    },
    async addFav(imgId, subId="1"){
        const data={
            image_id:imgId,
            sub_id:subId,
        }
        const res = await axios.post("https://api.thecatapi.com/v1/favourites", data, this.options)
        return res.data
    },
    async deleteFav(imgId){
        const res = await axios.delete(`https://api.thecatapi.com/v1/favourites/${imgId}`, this.options)
        return res.data;
    },
    async getFavCats() {
        const res = await axios.get(`https://api.thecatapi.com/v1/favourites`, this.options)
        return res.data;
    },
}

export default catsAPI