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
import tickets from '../images/Two Tickets.png'
import list from '../images/List.png'
import bestmovie from '../images/Rectangle 37bestmovies.png'
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
    return (<div className=' flex justify center align-center mx-auto'>
      <div>Loading...</div></div>

    );
  }


  const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
  return (
    <div className=' poppins flex w-full'>
      <nav className=' block h-[99.8svh] mr-[2rem] w-[20%] xl:w-[15rem]   shadow-slate-400 shadow-lg p-4 pr-[2.9rem] rounded-e-3xl '>
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
      <div className=' w-[80%]'>
        <div className=' mt-[1rem]  md:w-[90%] rounded-md'>
          <img src={backdropUrl} className=' h-[50svh] w-full rounded-md' alt="img" />
        </div>
        <div className=' lg:w-[83rem] md:w-[44.41rem]'>
          <section className=' flex justify-between'>
            <div className=' flex gap-1 lg:justify-between'>
              <h2 data-testid="movie-title" className='text-lg text-2xl font-medium whitespace-no-wrap overflow-hidden overflow-ellipsis max-w-full'>{movieDetails.title} </h2>
              <p data-testid="movie-release-date" className=' text-[1.2rem] font-medium'> . {movieDetails.release_date.slice(0, 4)}</p>
              <p data-testid="movie-runtime" className=' text-[1.2rem] font-medium'>. {`${Math.floor(movieDetails.runtime / 60)}h ${(Math.ceil((movieDetails.runtime % 60) * 100) / 100).toFixed(2)}m`} </p>
              <button className=' ml-[2.5rem] shadow-xl h-[2rem] text-[#B91C1C] rounded-xl p-1 text-[1rem] font-medium'>{movieDetails.genres[0].name}</button>
              <button className=' shadow-xl h-[2rem] text-[#B91C1C]  rounded-xl p-1 text-[1rem] font-medium'>{movieDetails.genres[1].name}</button>
            </div>
            <div className=' flex md:mt-1 gap-1'>
              <img src={star} alt="star" className=' md:h-[1.5rem] ' />
              <p data-testid="movie-rating"> {String(movieDetails.vote_average).slice(0, 3)}</p>
              <p data-testid="movie-votecount">|  <span className=' md:ml-3 md:pb-[2rem]'> {String(movieDetails.vote_count).slice(0, 3)}k</span> </p>

            </div>
          </section>
          <div className=' flex lg:w-[100%] md:w-[92%] mt-6 gap-3 justify-between'>

            <p data-testid="movie-overview"  className=' lg:w-[80rem]'>{movieDetails.overview}</p>
            <div>
            <button className=' flex justify-center mb-2 items-center bg-red-600 p-2 w-[15rem] rounded-xl h-12'>
              <img src={tickets} className=' w-[1.45rem]' alt="tickets" /> 
              <span className=' ml-2 mb-[.2rem] text-white font-500 text-shadow-md '>See Showtimes</span> 
              </button>
            <button className=' flex border-[1px] justify-center items-center bg-[#BE123C1A] border-red-500 p-2 w-[15rem] rounded-xl h-12'>
              <img src={list} alt="list" /> More watch options
              </button>
            </div>
          </div>
          
          <div className='flex mt-[3rem] gap-8'>
          <button className=' flex justify-center mt-10 text-white items-center bg-red-600 p-2 w-[25rem] md:w-[15rem] rounded-xl h-12 md:text-[.8rem]'>
            
              Top rated movie #65
              </button>
          <button className=' flex border-black border-[1px] justify-center mt-10 items-center bg-white p-2 w-[35rem] md:w-[26rem] rounded-xl h-12'>
            
              Awards 9 norminations
              </button>
              <img className=' lg:w-[25.1rem] md:w-[14.57rem]  ' src={bestmovie} alt="bestmovie4september" />
          </div>
        </div></div>
    </div>
  );
}

export default MovieDetails;