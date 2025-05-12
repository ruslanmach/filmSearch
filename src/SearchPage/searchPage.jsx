
import HeaderMenu from "../MainPage/Header/headerMenu";
import { useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ShowCards} from "../ShowCards/ShowCards";
import UsePagination from "../CustomHooks/Pagination/Pagination";
import {setCurrentPage} from "../FilmPage/filmPageReduser";
import React from "react";


function SearchPage(props) {
    const navigate = useNavigate();
    const imageUrl = "https://image.tmdb.org/t/p/w500";
    const movies = useSelector((state) => state.mainPage.movies);
    const countOfPages = useSelector(state => state.searchPage.countOfPages);
    const currentPage = useSelector(state => state.searchPage.currentPage);

    const dispatch = useDispatch();
    function handleSearch() {
        navigate("/search");
    }



    return <div>
        <HeaderMenu onEnter={handleSearch} />
        {ShowCards(movies, imageUrl, "series")}
        <UsePagination
            fetch={setCurrentPage}
            currentPage={currentPage}
            countOfPages={countOfPages}
        />
    </div>
}


export default SearchPage;