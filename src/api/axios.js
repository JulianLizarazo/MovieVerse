import axios from "axios";

export const API =  axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        'Content-Type': 'application/json;charset=utf-8',

    },

    params:{
        'api_key': import.meta.env.VITE_ACCESS_TOKEN,
        'language': 'es-MX',
    }
        
})

export const APIIMAGES = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        'Content-Type': 'application/json;charset=utf-8',

    },

    params:{
        'api_key': import.meta.env.VITE_ACCESS_TOKEN,
    }
})

