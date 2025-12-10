import React, { useEffect, useState } from 'react'
import Search from './components/Search.jsx'

import SpinnerComponent from "./components/Spinner.jsx";

//const API_BASE_URL = `https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;
const API_KEY = import.meta.env.VITE_OMDB_API;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    //Authorization: `Bearer ${API_KEY}`
  }
};


const App = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMessage('');



    try {
      const endpoint = `https://www.omdbapi.com/?s=${encodeURIComponent(searchTerm || "movie")}&apikey=${API_KEY}`;

      //const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS)

      if (!response.ok) {
        throw new Error('Failed to fetch movies');

      }
      const data = await response.json();
      //console.log(data);
      if (data.Response === 'False') {
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;

      }
      setMovieList(data.Search || [])

    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. please try again later. ')

      ///////////FINALLY///
    } finally {
      setIsLoading(false);
    }
  }




  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>

      <div className="pattern" />


      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className='text-gradient'> Movies </span> You'll Enjoy Without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <h2 className="text-white">{searchTerm}</h2>

        </header>
        <section className="all-movies">
          <h2>All Movies</h2>

          {isLoading ? (

            <SpinnerComponent />

          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <p className="text-white" key={movie.imdbID}>{movie.Title}</p>
              ))}
            </ul>
          )}




        </section>



      </div>


    </main>

  )
}

export default App
