import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

function Home() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    // Fetch top 10 movies from your TMDB API here
    // Update the state with topMovies
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {topMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;