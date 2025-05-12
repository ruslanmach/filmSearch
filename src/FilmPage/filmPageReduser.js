import React from 'react';
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {mainApi} from "../Api/apiMain";

import thunkAPI from "express/lib/router/route";

const initialState = {
    onLoad: false,
    films: [{
        poster: "",
        title: "",
        year: "",
        id: "",
    }],
    countOfPages: 0,
    currentPage:1
    
}

const filmPageReducer = createSlice({
    name: "filmPage",
    initialState,
    reducers: {
        setFilms: (state, action) => {
            state.films = action.payload;
        },
        setCountOfPage: (state, action) => {
            state.countOfPages = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(filmReducerThunk.fulfilled, (state, action) => {
            state.films = action.payload;
        });
    }

})

export const filmReducerThunk = createAsyncThunk(
    'filmPage/filmReducerThunk',
    async (page, ThunkApi) => {
        try {
          const result = await mainApi.getPopularFilms(page)
            const movies = result.data.results.map(movie => ({
                id: movie.id,
                poster: movie.poster_path,
                title: movie.title,
                year: movie.release_date.split('-')[0],
            }));
            // діспатчимо кількість сторінок для стейту search
            ThunkApi.dispatch(setCountOfPage(result.data.total_pages));
            return movies;
        } 
        catch {
            console.log("нині без фільмів наш сервер ліг")
        }
            
            
    }

)



export const {setFilms, setCountOfPage,setCurrentPage} = filmPageReducer.actions;

export default filmPageReducer.reducer;