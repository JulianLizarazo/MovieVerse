import { API } from "../api/axios"


const getGenres = async () => {
  try{
    const response = await API('genre/movie/list');

    return response;
  } catch (error){
    console.log(error);
  }

  
}

export { getGenres };