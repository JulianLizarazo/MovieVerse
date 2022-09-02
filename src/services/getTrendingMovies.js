import { API } from "../api/axios"


const getTrendingMovies = async () => {
  try{
    const response = await API('trending/movie/day');

    return response;
  } catch (error){
    console.log(error);
  }

  
}

export { getTrendingMovies };