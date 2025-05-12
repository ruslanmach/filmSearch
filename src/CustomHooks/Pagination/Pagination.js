import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from "../Pagination/paginationStyle.module.css"

export default function UsePagination({fetch, currentPage, countOfPages}) {
    const dispatch = useDispatch();
    const PAGES_PER_VIEW = 10;
    const totalPageBlocks = Math.ceil(countOfPages / PAGES_PER_VIEW);
    const [visibleRange, setVisibleRange] = useState(0);

    const handlePageChange = (page) => {
        dispatch(fetch(page));
    };

    const showNextRange = () => {
        if (visibleRange < totalPageBlocks - 1) {
            setVisibleRange(prev => prev + 1);
        }
    };

    const showPrevRange = () => {
        if (visibleRange > 0) {
            setVisibleRange(prev => prev - 1);
        }
    };

    const startPage = visibleRange * PAGES_PER_VIEW + 1;
    const endPage = Math.min(startPage + PAGES_PER_VIEW - 1, countOfPages);
    const pagesToRender = [];

    for (let i = startPage; i <= endPage; i++) {
        pagesToRender.push(i);
    }

    return (
        <div className={s.paginationContainer}>
            {visibleRange > 0 && (
                <button className={s.navigationButton} onClick={showPrevRange}>«</button>
            )}

            {pagesToRender.map(page => (
                <button
                    key={page}
                    className={`${s.paginationButton} ${currentPage === page ? s.active : ""}`}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </button>
            ))}

            {visibleRange < totalPageBlocks - 1 && (
                <button className={s.navigationButton} onClick={showNextRange}>»</button>
            )}
        </div>
    );
}
