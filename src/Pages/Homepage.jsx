// Home.js
import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard'; // Import the MovieCard component
import axios from 'axios';

function Home() {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieApi =  import.meta.env.VITE_REACT_APP_ZURI_MOVIES_API;
    const apiToken = import.meta.env.VITE_API_TOKEN_MY_API;
    const fetchTopMovies = async () => {
      try {
        const response = await axios.get(
          movieApi,
          {
            params: {
              api_key: apiToken,
              language: 'en-US',
              page: 1,
            },
          }
        );
        setTopMovies(response.data.results);
        console.log(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching top movies:', error);
        setLoading(false);
      }
    };

    fetchTopMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mx-auto">
      {topMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
