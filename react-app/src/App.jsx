import React, { useEffect, useState } from 'react';
import Search from './components/Search.jsx';
import SpinnerComponent from './components/Spinner.jsx';
import MovieCard from './components/MovieCard.jsx';

const API_KEY = import.meta.env.VITE_OMDB_API;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch full details for a single movie by imdbID
  const fetchMovieDetails = async (imdbID) => {
    const res = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`, API_OPTIONS);
    const data = await res.json();
    return data;
  };

  // Fetch movies based on search term
  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const searchEndpoint = query
        ? `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`
        : `https://www.omdbapi.com/?s=movie&apikey=${API_KEY}`;





      const response = await fetch(searchEndpoint, API_OPTIONS);
      const data = await response.json();

      if (data.Response === 'False') {
        if (data.Error === "Too many results.") {

          return;
        }

        setErrorMessage(data.Error || 'No movies found.');
        setMovieList([]);
        return;
      }


      // Fetch full details for each movie
      const detailedMovies = await Promise.all(
        data.Search.map(async (movie) => {
          return await fetchMovieDetails(movie.imdbID);
        })
      );

      setMovieList(detailedMovies);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setErrorMessage('Error fetching movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch default movies on mount
  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ width: '120px', height: 'auto' }}
          />

          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle
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
            <ul className="movies-grid">
              {movieList.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
