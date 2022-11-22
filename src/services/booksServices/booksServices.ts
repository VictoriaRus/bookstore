import axios from "axios";

export const getBooks = async ()=>{
    return await  axios.get('https://api.itbook.store/1.0/search/word-to-search/1')
}