import React, { useState, useEffect } from 'react'
import axios from 'axios';

import HeroBanner from './HeroBanner'
import Card from './Card'

function Movies() {

  const api_key = import.meta.env.VITE_TMDB_API_KEY;

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    async function fetchMovies() {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`);
      setMovies(response.data.results);
    }

    fetchMovies();
  }, [])

  return (
    <div>
      <HeroBanner />
      <div className='text-3xl font-bold text-center mt-8 mb-5'>
        <h1>Trending Movies</h1>
      </div>
      <div className='flex flex-wrap gap-8 m-18 justify-center'>
        {
          movies && movies.map((movie) => (
            <Card key={movie.id} movieTitle={movie.title} movieImage={movie.poster_path} />
          ))
        }
      </div>
    </div>
  )
}

export default Movies