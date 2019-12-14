import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard(props) {

  const { id, year, originalTitle, duration, imdbRating, genres, posterurl } = props;
  const genreList = genres.map(genre => <span key={Math.random()}>{genre}{genres.indexOf(genre) !== genres.length - 1 ? ',' : ''} </span>);

  return (
    <div className="card">
      <div className="card-container">
        <div className="card-img">
          <img src={posterurl} alt="movie-pic" />
        </div>
        <div className="card-body">
          <div>
            <h1 className="movie-header">{originalTitle}</h1>
            <p className="grey">{year} · {genreList} · {duration} </p>
          </div>
          <h2>{imdbRating}<span className="grey">/10</span></h2>
          <div className="meter"><span style={{ width: `${imdbRating * 10}%` }}></span></div>
          <Link to={`/detail/${id}`} className="btn">movie details</Link>
        </div>
      </div>
    </div>
  )
}
