import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Homepage';
import MovieDetails from './components/MovieDetails';



function App() {
  return (
    <Router>
      
        <div className=' mx-auto flex '>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/movies/:id"  element={<MovieDetails/>}/>
        </Routes>
        </div>
      
    </Router>
  );
}

export default App;