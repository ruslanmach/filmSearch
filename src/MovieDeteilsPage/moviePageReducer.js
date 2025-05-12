import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { detailsApi } from '../Api/apiMovieDetails';


const initialState = {
    movies: [], 
    isLoading: false,
    error: null
};

const detailReducer = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovie: (state, action) => {
            state.movies = action.payload; // Оновлюємо масив фільмів
        },
        resetMovie: (state) => {
            state.movies = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(detailsThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(detailsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movies = [action.payload]; // Можна зберігати один фільм як елемент масиву
            })
            .addCase(detailsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

const detailsThunk = createAsyncThunk(
    'movie/detailsThunk',
    async ({id,type}, thunkAPI) => {
        let result
        try {
            if(type === "films"){
                result =  await detailsApi.getFilmDetails(id)
            } else if(type === "series"){
                result =  await detailsApi.getSeriesDetails(id)
            }
            const movie = {
                id: result.data.id,
                poster: result.data.poster_path,
                title: type === "films" ? result.data.title : result.data.name, // Вибираємо правильне поле для фільмів чи серіалів
                original_language: result.data.original_language,
                overview: result.data.overview,
                homepage: result.data.homepage,
                year: type === "films" ? result.data.release_date : result.data.first_air_date, // Вибираємо рік для фільмів чи серіалів
            };
            console.log("Запит:", type, id);

            return movie; // Повертаємо фільм чи серіал
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const { setMovie, resetMovie } = detailReducer.actions;
export { detailsThunk };
export default detailReducer.reducer;
