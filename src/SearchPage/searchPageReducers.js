import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {mainApi} from "../Api/apiMain";
import {useDispatch} from "react-redux";

const initialState = {
    countOfPages: 0,
    currentPage:1
}






const searchPageReducer = createSlice({
    name: 'searchPage',
    initialState,
    reducers: {
        setCountOfPages: (state, action) => {
            state.countOfPages = action.payload;
        },
        setCurrentPage:(state, action) => {
            state.currentPage = action.payload;
        }
    }
})

export const {setCountOfPages,
    setCurrentPage} = searchPageReducer.actions;

export default searchPageReducer.reducer;
