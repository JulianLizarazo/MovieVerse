import { API } from "../api/axios";


const getMovie = async idMovie => {
    try{
        const response = await API(`movie/${idMovie}`);

        return response;

    } catch(error){
       
    } 
}

export { getMovie };