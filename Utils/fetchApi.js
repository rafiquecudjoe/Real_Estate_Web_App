import axios from "axios"

export const baseUrl = process.env.RAPID_URL;


export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
      headers: {
        "x-rapidapi-host": process.env.RAPID_URL1,
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      },
    });
    return data
    
}