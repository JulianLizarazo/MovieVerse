import { API } from "../api/axios"

const getMovieSearched = async ({page = 1, movieToSearch = ""}) => {
    
    try{
        const response = await API('search/movie', {
            params: {
                page: page,
                query: movieToSearch,
            }
        });

        return response;
    } catch (error){
        console.log(error);
    }
}

export { getMovieSearched }