import React from 'react'

function Card({ movieTitle, movieImage }) {
  const baseImageUrl = "https://media.themoviedb.org/t/p/w220_and_h330_face";

  return (
    <div className='flex flex-col items-center'>
      <div
        className='w-[220px] h-[330px] rounded-xl bg-coverbg-center flex items-center justify-center '
        style={{ backgroundImage: `url(${baseImageUrl}${movieImage})` }}
      >
      </div>
      <div className="text-black text-xl w-[220px] text-center">
        {movieTitle}
      </div>
    </div>
  )
}

export default Card