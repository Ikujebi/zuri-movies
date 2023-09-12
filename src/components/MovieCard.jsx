import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div data-testid="movie-card" className="max-w-xs rounded overflow-hidden shadow-lg  ">
      <Link to={`/movies/${movie.id}`}>
        
        <img data-testid="movie-poster" className="w-full" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      </Link>
      <div className="px-6 py-4">
      <p data-testid="movie-release-date" className="text-gray-600 text-sm">{movie.release_date}</p>
        <Link to={`/movies/${movie.id}`}>
          <div data-testid="movie-title" className="font-bold text-xl mb-2">{movie.title}</div>
        </Link>
        
      </div>
    </div>
  );
}

export default MovieCard;