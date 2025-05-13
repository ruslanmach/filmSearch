import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {mainApi} from "../Api/apiMain";
import {useDispatch} from "react-redux";
import {setCountOfPages} from "../SearchPage/searchPageReducers";

const initialState = {
    searchQuery: '',
    selectedCategory: 'all', 
    movies: [
        {
            id: "",
            poster: "",
            title: "",
            year: "",
        }
    ],
    isLoading: false,
    error: null
}


const searchFilmByKeyWord = createAsyncThunk(
    'mainPage/searchFilmByKeyWord',
    async ({ keyWord, page }, thunkAPI) => {
        try {
            const result = await mainApi.getFilms(keyWord, page);

            const movies = result.data.results.map(show => ({
                id: show.id,
                poster: show.poster_path,
                title: show.name,
                year: (show.first_air_date || '').split('-')[0],
            }));

            thunkAPI.dispatch(setCountOfPages(result.data.total_pages));
            return movies;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);













const mainReducer = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(searchFilmByKeyWord.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(searchFilmByKeyWord.fulfilled, (state, action) => {
                state.isLoading = false; 
                state.movies = action.payload; 
            })
            .addCase(searchFilmByKeyWord.rejected, (state, action) => {
                state.isLoading = false; 
                state.error = action.payload; 
            });
    }
    
})
export const {
    setSearchQuery,
    setSelectedCategory,
    setMovies,
    setIsLoading,
    setError,
} = mainReducer.actions;

export { searchFilmByKeyWord }; 

export default mainReducer.reducer;