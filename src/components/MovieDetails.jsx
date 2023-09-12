import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {

      try {
        const movieApi =  import.meta.env.VITE_REACT_APP_ZURI_MOVIES_API;
        const apiToken = import.meta.env.VITE_API_TOKEN_MY_API;
        const response = await axios.get(
          `${movieApi}/${id}?api_key=${apiToken}`
        );
        console.log(response.data);
        setMovieDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 data-testid="movie-title">{movieDetails.title}</h2>
      <p data-testid="movie-release-date">{movieDetails.release_date}</p>
      <p data-testid="movie-runtime">{movieDetails.runtime} minutes</p>
      <p data-testid="movie-overview">{movieDetails.overview}</p>
      <MovieCard movie={setMovieDetails}/>
    </div>
  );
}

export default MovieDetails;