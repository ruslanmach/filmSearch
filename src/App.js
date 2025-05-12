import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { Suspense, lazy } from 'react';


const MainPage = lazy(() => import('./MainPage/mainPage'));
const FilmPage = lazy(() => import('./FilmPage/filmPage'));
const SeriesPage = lazy(() => import('./SeriesPage/seriesPage'));
const SearchPage = lazy(() => import('./SearchPage/searchPage'));
const MovieDetailsPage = lazy(() => import('./MovieDeteilsPage/movieDetailsPage'));



function App() {
  return (
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route index element={<MainPage />} />
            <Route path="/films" element={<FilmPage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/:type/:id" element={<MovieDetailsPage />} />
        </Routes>
        </Suspense>
    </BrowserRouter>
  );
}

export default App;
