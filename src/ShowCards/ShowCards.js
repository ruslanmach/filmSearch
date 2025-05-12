import React from "react";
import s from "../MainPage/mainPageStyleCard.module.css";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setFilms} from "../ModalPage/modalReducer";

export function ShowCards(films, imageUrl, type) {
    const dispatch = useDispatch();

    if (films.length > 0) {
        return (
            <div className={s.moviesContainer}>
                {films.map((film, index) => {
                    const glowColor = film.dominantColor || "rgba(255, 69, 0, 0.5)";

                    return (
                        <div key={index} className={s.movieCard} style={{ "--glow-color": glowColor }}>
                            <img src={imageUrl + film.poster} alt={film.title}/>
                            <h3>
                                <Link to={`/${type}/${film.id}`}>{film.title}</Link>
                            </h3>
                            <h4>{film.year}</h4>
                            <button onClick={() => dispatch(setFilms(film))}>Додати до улюблених</button>
                        </div>
                    );
                })}
            </div>
        );
    }
}
