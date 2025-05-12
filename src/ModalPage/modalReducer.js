import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    movies:[]
}

const modalReducer = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setFilms: (state, action) => {
            state.movies.push(action.payload);
        },
        deleteMovie: (state, action) => {
            state.movies.splice(action.payload, 1);
        }
    }
})


export const {setFilms, deleteMovie} = modalReducer.actions;

export default modalReducer.reducer;