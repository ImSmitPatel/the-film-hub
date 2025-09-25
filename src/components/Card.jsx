import React from 'react'

function Card() {
  const url = [
    "https://media.themoviedb.org/t/p/w220_and_h330_face/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "url",

  ];

  return (
    <div className='flex flex-col'>
      <div
        className='w-[220px] h-[330px] rounded-xl bg-coverbg-center flex items-center justify-center '
        style={{ backgroundImage: `url(${url[0]})` }}
      >
        <div className="text-white text-3xl w-full text-center bg-gray-600/70 rounded-xl">
          The Dark Knight
        </div>
      </div>
    </div>
  )
}

export default Card