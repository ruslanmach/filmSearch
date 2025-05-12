
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {mainApi} from "../Api/apiMain";



const initialState = {
    onLoad: false,
    series: [{
        poster: "",
        title: "",
        year: "",
        id: "",
    }],
    countOfPages: 0,
    currentPage:1

}

const seriesPageReducer = createSlice({
    name: "seriesPage",
    initialState,
    reducers: {
        setFilms: (state, action) => {
            state.series = action.payload;
        },
        setCountOfPage: (state, action) => {
            state.countOfPages = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(seriesReducerThunk.fulfilled, (state, action) => {
            state.series = action.payload;
        });
    }

})

export const seriesReducerThunk = createAsyncThunk(
    'seriesPage/seriesReducerThunk',
    async (page, ThunkApi) => {
        try {
            const result = await mainApi.getSeries(page)
            const movies = result.data.results.map(movie => ({
                id: movie.id,
                poster: movie.poster_path,
                title: movie.name, 
                year: (movie.first_air_date || '').split('-')[0],
            }));

            // діспатчимо кількість сторінок для стейту search
            console.log(movies)
            ThunkApi.dispatch(setCountOfPage(result.data.total_pages));
            return movies;
        }
        catch {
            console.log("нині без фільмів наш сервер ліг")
        }


    }

)



export const {setFilms, setCountOfPage,setCurrentPage} = seriesPageReducer.actions;

export default seriesPageReducer.reducer;