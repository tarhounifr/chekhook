import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListe.css'
const MovieListe = ({ movies, search, rating }) => {
    return (
        <div className="movieliste">

            {movies
                .filter(movie => movie.title.toLowerCase().includes(search.toLowerCase())
                    &&
                    movie.rating >= rating.rating
                )
                .map(movie =>
                    <MovieCard movie={movie} key={movie.id} />)}
        </div>
    )
}

export default MovieListe
