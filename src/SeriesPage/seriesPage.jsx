import React, {useEffect} from 'react';
import HeaderMenu from "../MainPage/Header/headerMenu";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ShowCards, showCards} from "../ShowCards/ShowCards";
import {seriesReducerThunk} from "./seriesPageReducer";
import UsePagination from "../CustomHooks/Pagination/Pagination";
import { setCurrentPage } from "../SeriesPage/seriesPageReducer";


function SeriesPage() {
    const imageUrl = "https://image.tmdb.org/t/p/w500";
    const films = useSelector((state) => state.seriesPage.series);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const page = useSelector((state) => state.seriesPage.currentPage);
    const state = useSelector((state) => state.seriesPage.series);
    const countOfPages = useSelector(state => state.seriesPage.countOfPages);
    const currentPage = useSelector(state => state.seriesPage.currentPage);
    
    function handleSearch() {
        navigate("/search");
    }



    useEffect(() => {
        dispatch(seriesReducerThunk(page));
      

    }, [dispatch, page]);

    return (
        <div className="FilmPage">
            <HeaderMenu onEnter={handleSearch}/>

            {ShowCards(films, imageUrl, "series")}

            <UsePagination
                fetch={setCurrentPage}
                currentPage={currentPage}
                countOfPages={countOfPages}

            />
        </div>
    );
}
export default SeriesPage;