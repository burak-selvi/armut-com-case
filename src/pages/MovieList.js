import React from 'react'
import MovieCard from '../components/MovieCard';
import movielist from '../data/movielist';

export default function MovieList() {
  return (
    <>
      {movielist.map(movie => {
        return (
          <MovieCard
            key={movie.id}
            {...movie}
          />
        );
      })}
    </>
  )
}
