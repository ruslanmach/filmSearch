import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../MainPage/mainPageReducer';
import searchPageReducer from "../SearchPage/searchPageReducers";
import filmPageReducer from "../FilmPage/filmPageReduser";
import detailReducer from "../MovieDeteilsPage/moviePageReducer";
import seriesPageReducer from "../SeriesPage/seriesPageReducer";
import modalReducer from "../ModalPage/modalReducer";
const store = configureStore({
    reducer: {
        mainPage: mainReducer,
        searchPage:searchPageReducer,
        filmPage:filmPageReducer,
        detailsPage:detailReducer,
        seriesPage: seriesPageReducer,
        modalPage: modalReducer,
    }
});




export default store;
