import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/tfh-logo.png'

function NavBar() {
  return (
    <div className="p-[10px]">
      <div className='flex items-center p-2 bg-black mx-auto rounded-xl w-full'>
        <img className='w-[80px] mr-10' src={logo} alt="The Film Hub" />
        <div className="flex space-x-6">
          <Link className='text-white' to='/'>Movies</Link>
          <Link className='text-white' to='/tv'>TV Shows</Link>
          <Link className='text-white' to='/watchlist'>Watchlist</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar