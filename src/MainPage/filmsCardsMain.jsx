import React from 'react';
import {ShowCards} from "../ShowCards/ShowCards";
import s from "../MainPage/Header/filmsCardsMainStyle.module.css";

function FilmsCardsMain({navigate, films, type}) {
    const imageUrl = "https://image.tmdb.org/t/p/w500";

    return (
        <div className={s.sectionContainer}>
            <div className={s.header}>
                <h2>{type === "films" ? "Films" : "Series"}</h2>
                <div className={s.gradientLine}></div>
                <button className={s.viewAllButton} onClick={navigate}>View All</button>
            </div>
            {ShowCards(films.slice(0, 10), imageUrl, type)}
        </div>
    );
}

export default FilmsCardsMain;
