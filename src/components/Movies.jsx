import React, { useState, useEffect } from 'react'
import axios from 'axios';

import HeroBanner from './HeroBanner'
import Card from './Card'
import Pagination from './Pagination';

function Movies() {
  // API KEY
  const api_key = import.meta.env.VITE_TMDB_API_KEY;

  // Trending Movies
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [currentPageTrending, setCurrentPageTrending] = useState(1);
  const [totalPagesTrending, setTotalPagesTrending] = useState(null);

  const goToNextPageTrending = () => {
    setCurrentPageTrending(currentPageTrending + 1);
  };
  const goToPreviousPageTrending = () => {
    if (currentPageTrending > 1) {
      setCurrentPageTrending(currentPageTrending - 1);
    }
  };

  useEffect(() => {

    async function fetchTrendingMovies() {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}&language=en-US&page=${currentPageTrending}`);
      setMoviesTrending(response.data.results);
      setTotalPagesTrending(response.data.total_pages);
    }

    fetchTrendingMovies();
  }, [currentPageTrending])

  // Now Playing
  const [moviesNowPlaying, setMoviesNowPlaying] = useState([]);
  const [currentPageNowPlaying, setCurrentPageNowPlaying] = useState(1);
  const [totalPagesNowPlaying, setTotalPagesNowPlaying] = useState(null);

  const goToNextPageNP = () => {
    setCurrentPageNowPlaying(currentPageNowPlaying + 1);
  };
  const goToPreviousPageNP = () => {
    if (currentPageNowPlaying > 1) {
      setCurrentPageNowPlaying(currentPageNowPlaying - 1);
    }
  };

  useEffect(() => {
    async function fetchNowPlayingMovies() {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=${currentPageNowPlaying}`);
      setMoviesNowPlaying(response.data.results);
      setTotalPagesNowPlaying(response.data.total_pages);
    }

    fetchNowPlayingMovies();
  }, [currentPageNowPlaying])

  return (
    <div>
      <HeroBanner />
      <div className='text-3xl font-bold text-center mt-10'>
        <h1>In Cinemas</h1>
      </div>
      <div className='flex flex-wrap gap-8 mt-5 mb-5 m-18 justify-center'>
        {
          moviesNowPlaying && moviesNowPlaying.map((movie) => (
            <Card key={movie.id} movieTitle={movie.title} movieImage={movie.poster_path} />
          ))
        }
      </div>
      <Pagination goToNextPage={goToNextPageNP} goToPreviousPage={goToPreviousPageNP} currentPage={currentPageNowPlaying} totalPages={totalPagesNowPlaying} />

      <div className='text-3xl font-bold text-center mt-10'>
        <h1>Trending Today</h1>
      </div>
      <div className='flex flex-wrap gap-8 mt-5 mb-5 m-18 justify-center'>
        {
          moviesTrending && moviesTrending.map((movie) => (
            <Card key={movie.id} movieTitle={movie.title} movieImage={movie.poster_path} />
          ))
        }
      </div>

      <Pagination goToNextPage={goToNextPageTrending} goToPreviousPage={goToPreviousPageTrending} currentPage={currentPageTrending} totalPages={totalPagesTrending} />
    </div>
  )
}

export default Movies