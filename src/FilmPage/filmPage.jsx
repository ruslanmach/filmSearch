import React, {useEffect} from 'react';
import HeaderMenu from "../MainPage/Header/headerMenu";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ShowCards, showCards} from "../ShowCards/ShowCards";
import {filmReducerThunk} from "./filmPageReduser";
import UsePagination from "../CustomHooks/Pagination/Pagination";
import { setCurrentPage } from "./filmPageReduser";

function FilmPage() {
    const imageUrl = "https://image.tmdb.org/t/p/w500";
    const films = useSelector((state) => state.filmPage.films);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const page = useSelector((state) => state.filmPage.currentPage);
    const countOfPages = useSelector(state => state.filmPage.countOfPages);
    const currentPage = useSelector(state => state.filmPage.currentPage);
    function handleSearch() {
        navigate("/search");
    }


    useEffect(() => {
        dispatch(filmReducerThunk(page));
    }, [dispatch, page]);
    
    return (
        <div className="FilmPage">
            <HeaderMenu onEnter={handleSearch} />

            {ShowCards(films, imageUrl, "films")}

           <UsePagination
               fetch={setCurrentPage}
               currentPage={currentPage}
               countOfPages={countOfPages}
           />
        </div>
    )
}
export default FilmPage;