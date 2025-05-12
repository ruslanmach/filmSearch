
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import s from "./buttonsStyle.module.css";
import {ModalPage} from "../../ModalPage/modalPage";
import {useDispatch, useSelector} from "react-redux";
import {deleteMovie} from "../../ModalPage/modalReducer";
import SearchField from "../Header/SearchField";

function ButtonsHeader(props) {
    const [isOpen, setIsOpen] = useState(false);
    const movies = useSelector(state => state.modalPage.movies);
    const dispatch = useDispatch();

    return (
        <div className={s.headerContainer}>
            <NavLink to="/" className={s.navlink}>Home</NavLink>
            <NavLink to="/films" className={s.navlink}>Films</NavLink>
            <NavLink to="/series" className={s.navlink}>Series</NavLink>

            <SearchField onEnter={props.onEnter} />

            <button className={s.favoritesButton} onClick={() => setIsOpen(true)}>Favorites</button>

            <ModalPage isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ul>
                    {movies.map((movie, index) => (
                        <li key={index}>
                            {movie.title}
                            <button className="modal-delete-button" onClick={() =>
                                dispatch(deleteMovie(index))}>X</button>
                        </li>
                    ))}
                </ul>
            </ModalPage>
        </div>
    );
}


export default ButtonsHeader;