import React, { useState } from 'react'
import FilterByName from './FilterByName/FilterByName'
import Rating from './Rating/Rating'
import moviesData from './MoviesData'
import MovieListe from './MovieListe/MovieListe'
import AddMovie from './AddMovie/AddMovie'


const MovieApp = () => {
    const [movies, setmovies] = useState(moviesData);
    const [search, setsearch] = useState("");
    const [rating, setrating] = useState(1);
    const addMovie = (newmovie) => {
        setmovies([...movies, newmovie])
    }
    return (
        <div>
            <div>
                <FilterByName setsearch={setsearch} />
                <Rating filterrating={true} rating={rating} setrating={setrating} />
            </div>
            <MovieListe movies={movies} search={search} rating={rating} />
            <AddMovie />
        </div>

    )
}

export default MovieApp
