// Home.js
import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard'; // Import the MovieCard component
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import ErrorMessage from '../components/ErrorMessage';
import tv from '../images/tv (1).png'
import menu from '../images/Menu.png'
import youtube from '../images/Button.png'
import youtubeicon from '../images/fa-brands_youtube.png'
import facebook from '../images/Vector.png'
import twiter from '../images/fa-brands_twitter.png'
import instagram from '../images/fa-brands_instagram.png'
import seeMore from '../images/See more.png'
import { Link } from 'react-router-dom'
import { Spin } from 'antd';

function Home() {
  const [topMovies, setTopMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searched, setSearched] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const initialCardCount = 10;
  const [cardCount, setCardCount] = useState(initialCardCount);

  useEffect(() => {
    const movieApi = import.meta.env.VITE_REACT_APP_ZURI_MOVIES_API;
    const apiToken = import.meta.env.VITE_API_TOKEN_MY_API;
    const fetchTopMovies = async () => {
      try {
        const response = await axios.get(
          movieApi + "top_rated",
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
  // Initialize with all movies

  // Define a function to handle the search
  const handleSearch = (query) => {
    // Filter the movies based on the search query
    const filtered = topMovies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
    setSearched(true);
  };

  const date = new Date()
  const year = date.getFullYear()

  if (loading) {
    return <div className=' flex justify-center items-center mt-[30rem]'>
      <div>
      <Spin size="large" />  Loading...
      </div></div>;
  }

  return (
    <>
      <div className="container1 w-[100%]">
        <header className=" bg-[url('./images/Poster.png')] w-full h-[50svh]">
          <div className="   flex justify-around" >
            <div className=' flex gap-[3rem]'> <div className=' h-[3rem] '><img src={tv} alt="tv" /></div>
              <h1 className=" text-[1.6rem]    text-white ">MovieBox </h1>
            </div>

            <SearchBar onSearch={handleSearch} />
            <div><img src={menu} alt="signIn" /></div>
            <ErrorMessage />
          </div>
          <section className=' w-[20.3rem] text-white mt-[6rem] ml-[5rem]'>
            <h2 className=' text-[2.4rem] font-[600]'>John wick 3: Parabellum </h2>
            <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
            <Link to={"https://www.google.com/search?sca_esv=564389839&sxsrf=AB5stBg1ERzbOfNNxA7uesoEBFRDNp-zsw:1694450206188&q=john+wick+3+movie+thriller&tbm=vid&source=lnms&sa=X&ved=2ahUKEwjcj4T1_qKBAxWCUkEAHdFmD0sQ0pQJegQIDRAB&biw=1920&bih=955&dpr=1#fpstate=ive&vld=cid:baf0d1f7,vid:M7XM597XO94,st:0"}><img src={youtube} alt="youtube" /></Link>
          </section>
        </header>
        <div className=" w-[96%] mx-auto">
          <div className=' mt-[1.99rem] mx-auto flex justify-between'>
            <h2 className=' text-[1.3rem] font-medium'>Featured Movie</h2>
            <img className=' mt-1' src={seeMore} alt="seeMore"
              onClick={() => setCardCount(cardCount + initialCardCount)}
            />
          </div>
          {!searched ? (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mx-auto">
              {topMovies.slice(0, showAll ? topMovies.length : cardCount).map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>) : null}
          <div className=' flex flex-col justify-center items-center '>
            <h2 className=' mt-6 text-2xl mb-3'>Searched Movies</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mx-auto">

              {filteredMovies.length > 0 ? ( // Check if there are filtered movies
                filteredMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))
              ) : (
                <div>No movies found.</div>
              )}
            </div></div>
          <footer className=' text-black flex flex-col items-center mt-[3rem]'>
            <div className='flex gap-5'>
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={twiter} alt="twiter" />
              <img src={youtubeicon} alt="youtubeicon" />
            </div>
            <div className=' mt-4 mb-4 flex gap-4 text-grey-900'>
              <b>Conditions of use</b>
              <b>Privacy & Policy</b>
              <b>Press Room</b>
            </div >
            <div className=' text-gray-500 font-medium'>
              <p className=' flex justify-center items-center mb-1'>{'\u00a9'}{year} MovieBox by Ikujebi Kehinde</p>
              <p>{'\u00a9'}{year} MovieBox designed by Adriana Eka Prayudha</p>
            </div>
          </footer>
        </div>
      </div>

    </>
  );
}

export default Home;
