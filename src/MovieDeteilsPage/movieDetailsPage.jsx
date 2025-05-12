import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsThunk, resetMovie } from './moviePageReducer';
import HeaderMenu from "../MainPage/Header/headerMenu";
import s from "./movieDetailsPageStyle.module.css"; // Підключаємо стилі

function MovieDetailsPage() {
    const { id, type } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.detailsPage.movies[0]);

    useEffect(() => {
        dispatch(resetMovie());
        dispatch(detailsThunk({ id, type }));
    }, [id, type]);

    if (!movie) {
        return <div className={s.loading}>Завантаження...</div>;
    }

    return (
        <div className={s.movieDetailsPage}>
            <HeaderMenu />
            <div className={s.content}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster}`} alt={movie.title} className={s.poster} />
                <div className={s.details}>
                    <h1 className={s.title}>{movie.title}</h1>
                    <p className={s.overview}>{movie.overview}</p>
                    <p className={s.info}><strong>Оригінальна мова:</strong> {movie.original_language}</p>
                    <p className={s.info}><strong>Рік випуску:</strong> {movie.year}</p>
                    <a href={movie.homepage} target="_blank" rel="noopener noreferrer" className={s.officialLink}>
                        Офіційний сайт
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailsPage;
