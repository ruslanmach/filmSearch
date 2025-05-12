import axios from 'axios';



export const mainApi = {
    getFilms(keyWord, page ) {
        return axios.get(`https://api.themoviedb.org/3/search/tv`, {
            params: {
                api_key: 'd4e4b67066aa94ac6bae86ed81c70a11',
                query: keyWord,
                page: page
            }
        });
    },
    getPopularFilms(page){
        return axios.get('https://api.themoviedb.org/3/movie/popular', {
            params: {
                api_key: 'd4e4b67066aa94ac6bae86ed81c70a11',
                page: page
            }
        });
    },
    getSeries(page){
        return axios.get('https://api.themoviedb.org/3/tv/popular', {
            params: {
                api_key: 'd4e4b67066aa94ac6bae86ed81c70a11',
                page: page
            }
        });
    }
};
