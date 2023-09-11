import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Homepage';
import MovieDetails from './components/MovieDetails';
import SearchBar from './components/SearchBar';
import ErrorMessage from './components/ErrorMessage';
import tv from './images/tv.png'
import menu from './images/menu.png'
import youtube from './images/Button.png'

function App() {
  return (
    <Router>
      <div className="container1 mx-auto">
        <header className=" bg-[url('./images/poster.png')] h-[50svh]">
        <div className="   flex justify-around" >
          <div className=' flex gap-[3rem]'> <div className=' h-[3rem] '><img src={tv} alt="tv" /></div>
          <h1 className=" text-[1.6rem]    text-white ">MovieBox </h1>
          </div>
        
        <SearchBar />
        <div><img src={menu} alt="signIn" /></div>
        <ErrorMessage />
        </div>
        <section className=' w-[20.3rem] text-white mt-[6rem] ml-[5rem]'>
          <h2 className=' text-[2.4rem] font-[600]'>John wick 3: Parabellum </h2>
          <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
        <img src={youtube} alt="youtube" />
        </section>
        </header>
        
        <div className=' mx-auto mt-4 flex '>
        <Routes>
          <Route path="/"  component={Home} element={<Home/>} />
          <Route path="/movies/:id" component={MovieDetails} element={<MovieDetails/>}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;