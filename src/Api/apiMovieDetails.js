import axios from 'axios';



export const detailsApi = {
    getFilmDetails(id) {
        return axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
            params: {
                api_key: 'd4e4b67066aa94ac6bae86ed81c70a11',
            }
        })
    },
    getSeriesDetails(id) {
        return axios.get(`https://api.themoviedb.org/3/tv/${id}`, {
            params: {
                api_key: 'd4e4b67066aa94ac6bae86ed81c70a11',
            }
        })
    },
   
};
