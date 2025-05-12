import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchFilmByKeyWord, setSearchQuery} from "../mainPageReducer";
import s from "./searchField.module.css"; 

function SearchField(props) {
    const dispatch = useDispatch();
    const searchQuery = useSelector(state => state.mainPage.searchQuery);
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        dispatch(setSearchQuery(value));
    }

    function isSearchForInput(keyWord) {
        dispatch(searchFilmByKeyWord({keyWord, page: 1}));
    }

    return (
        <div className={s.searchField}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        isSearchForInput(searchQuery);
                        props.onEnter();
                    }
                }}
                className={s.searchInput}
                placeholder="Введіть ключове слово"
            />
        </div>
    );
}

export default SearchField;
