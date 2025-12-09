import React, { useEffect, useState } from 'react'
import Search from './components/Search.jsx'

//const API_BASE_URL = `https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;
const API_KEY = import.meta.env.VITE_OMDB_API;

// const API_OPTIONS = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     //Authorization: `Bearer ${API_KEY}`
//   }
// };


const App = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const fetchMovies = async () => {
    try {

    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. please try again later. ')
    }
  }




  useEffect(() => {

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
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </section>



      </div>


    </main>

  )
}

export default App
