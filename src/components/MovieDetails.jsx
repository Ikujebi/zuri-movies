import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import tv from '../images/tv (1).png'
import movie from '../images/Movie Projector.png'
import home from '../images/Home.png'
import tvicon from '../images/TV Show.png'
import calender from '../images/Calendar.png'
import logout from '../images/Logout.png'
import star from '../images/Star.png'
import { Link } from 'react-router-dom';



function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {

      try {
        const movieApi = import.meta.env.VITE_REACT_APP_ZURI_MOVIES_API;
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
    return ( <div className=' flex justify center align-center'>
      <div>Loading...</div></div>
    
    );
  }


  const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
  return (
    <div className=' flex '>
      <nav className=' block h-[99.8svh] mr-[2rem]    shadow-slate-400 shadow-lg p-4 pr-[2.9rem] rounded-e-3xl '>
        <header className=' mt-[2rem] flex gap-2 mb-[5.9rem]'><img src={tv} className=' h-[3.4rem] p-2' alt="tv" /> <h1 className=' pt-[.7rem] text-2xl md:mr-7 font-md'>MovieBox</h1></header>
        <Link to={'/'}><div className=' flex gap-3 mt-[1rem] ml-[.7rem]'><img src={home} alt="home" /><h2 className=' text-[1.12rem]'>Home</h2></div></Link>
        <div className=' flex gap-3 mt-[1rem] ml-[.7rem]'><img src={movie} alt="home" /><h2 className=' text-[1.12rem]'>Movies</h2></div>
        <div className=' flex gap-3 mt-[1rem] ml-[.7rem]'><img src={tvicon} alt="home" /><h2 className=' text-[1.12rem]'>TV Series</h2></div>
        <div className=' flex gap-3 mt-[1rem] ml-[.7rem]'><img src={calender} alt="home" /><h2 className=' text-[1.12rem]'>Upcoming</h2></div>
        <div className="rounded-xl border mt-[5rem] border-red-500 bg-pink-200 p-4 bg-opacity-40">
          <h2 className=' mx-auto'>Play movie quizes and earn free tickets</h2>
          <p className=' text-[.76rem]'>50k people are playing now</p>
          <button className=' bg-red-500 bg-opacity-20 text-red-600 px-3 py-1 mt-3 rounded-xl'>Start playing</button>
        </div>
        <div className=' flex gap-3 mt-[4rem] ml-[.7rem]'><img src={logout} alt="logout" /><h2 className=' text-[1.12rem]'>Logout</h2></div>
      </nav>
      <div>
        <div className=' mt-[1rem] w-[65%] md:w-3/4 rounded-md'>
          <img src={backdropUrl} className=' h-[50svh] w-full rounded-md' alt="img" />
        </div>
        <div className=' w-[65%]'>
          <section className=' flex justify-between'>
          <div className=' flex gap-1'>
          <h2 data-testid="movie-title" className='text-lg text-2xl font-medium whitespace-no-wrap overflow-hidden overflow-ellipsis max-w-full'>{movieDetails.title} </h2>
          <p data-testid="movie-release-date" className=' text-[1.2rem] font-medium'> . {movieDetails.release_date.slice(0, 4)}</p>
          <p data-testid="movie-runtime" className=' text-[1.2rem] font-medium'>. {`${Math.floor(movieDetails.runtime / 60)}h ${(Math.ceil((movieDetails.runtime % 60) * 100) / 100).toFixed(2)}m`} </p>
          <button className=' ml-[2.5rem] shadow-xl h-[2rem] text-[#B91C1C] rounded-xl p-1 text-[1rem] font-medium'>{movieDetails.genres[0].name}</button>
          <button className=' shadow-xl h-[2rem] text-[#B91C1C]  rounded-xl p-1 text-[1rem] font-medium'>{movieDetails.genres[1].name}</button>
          </div> 
          <div className=' flex'>
            <img src={star} alt="star" />
            <p data-testid="movie-rating"> {String(movieDetails.vote_average).slice(0, 4)}</p>

          </div>
          </section>
          <p data-testid="movie-overview">{movieDetails.overview}</p>
        </div></div>
    </div>
  );
}

export default MovieDetails;