import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Movies from './components/Movies'
import TVShows from './components/TVShows'
import WatchList from './components/WatchList'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <div className='sticky top-0 z-50'>
            <NavBar />
          </div>
          <Routes>
            <Route path='/' element={<Movies />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/tv-shows' element={<TVShows />} />
            <Route path='/watchlist' element={<WatchList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App