import React, {useEffect} from 'react';
import HeaderMenu from "./Header/headerMenu";
import {useLocation, useNavigate} from "react-router-dom";
import FilmsCardsMain from "./filmsCardsMain";
import {useDispatch, useSelector} from "react-redux";
import {seriesReducerThunk} from "../SeriesPage/seriesPageReducer";
import {filmReducerThunk} from "../FilmPage/filmPageReduser";






function MainPage() {
    const navigate = useNavigate();
    const navigateCards = () => navigate("/films");
    const navigateCardsSeries = () => navigate("/series");
    const films = useSelector((state) => state.filmPage.films);
    const series = useSelector((state) => state.seriesPage.series);
    const dispatch = useDispatch();
    const location = useLocation();
    const page = useSelector((state) => state.seriesPage.currentPage);
    const page1 = useSelector((state) => state.filmPage.currentPage);
    function handleSearch() {
        navigate("/search");
    }
    
    useEffect(() => {
        if (location.pathname === "/") {
            dispatch(seriesReducerThunk(page));
            dispatch(filmReducerThunk(page1));
        }
    }, [location.pathname]);

    return (
        <div>
            <HeaderMenu onEnter={handleSearch} />
            <FilmsCardsMain navigate = {navigateCards} films={films} type={"films"} />
            
            <FilmsCardsMain navigate = {navigateCardsSeries} films={series} type={"series"} />
            
        </div>
    );
}

export default MainPage;
