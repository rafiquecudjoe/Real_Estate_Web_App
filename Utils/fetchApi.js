import axios from "axios"

export const baseUrl = "https://bayut.p.rapidapi.com";


// var axios = require("axios").default;

// var options = {
//   method: "GET",
//   url: "https://bayut.p.rapidapi.com/auto-complete",
//   params: { query: "abu dhabi", hitsPerPage: "25", page: "0", lang: "en" },

// };


export const fetchApi = async (url) => {
    const {data} = await axios.get(url, {
         headers: {
           "x-rapidapi-host": "bayut.p.rapidapi.com",
          "x-rapidapi-key": "ebede5a2a1msh01ea39151d2325dp12d2c0jsn202d82316a9c",
        },
    });
    return data
    
}