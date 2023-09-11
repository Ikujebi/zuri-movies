import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Homepage';
import MovieDetails from './components/MovieDetails';
import SearchBar from './components/SearchBar';
import ErrorMessage from './components/ErrorMessage';

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mt-4">MovieBox</h1>
        <SearchBar />
        <ErrorMessage />
        <Routes>
          <Route path="/"  component={Home} element={<Home/>} />
          <Route path="/movies/:id" component={MovieDetails} element={<MovieDetails/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;