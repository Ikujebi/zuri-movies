import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Homepage';
import MovieDetails from './components/MovieDetails';
import SearchBar from './components/SearchBar';
import ErrorMessage from './components/ErrorMessage';
import tv from './images/tv.png'
import menu from './images/menu.png'

function App() {
  return (
    <Router>
      <div className=" mx-auto ">
        <div className="  bg-[url('./images/poster.png')] h-[50svh] flex justify-between" >
          <div className=' flex gap-[3rem]'> <div className=' h-[3rem] '><img   src={tv} alt="tv" /></div>
          <h1 className="     text-white ">MovieBox </h1>
          </div>
        
        <SearchBar />
        <div><img src={menu} alt="signIn" /></div>
        <ErrorMessage />
        </div>
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