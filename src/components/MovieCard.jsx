import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div data-testid="movie-card" className="max-w-xs rounded overflow-hidden shadow-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Link to={`/movies/${movie.id}`}>
        <img data-testid="movie-poster" className="w-full" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      </Link>
      <div className="px-6 py-4">
        <Link to={`/movies/${movie.id}`}>
          <div data-testid="movie-title" className="font-bold text-xl mb-2">{movie.title}</div>
        </Link>
        <p data-testid="movie-release-date" className="text-gray-600 text-sm">{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;