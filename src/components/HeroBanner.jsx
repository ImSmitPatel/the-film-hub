import React from 'react'

function HeroBanner() {
  const url = "https://image.tmdb.org/t/p/original/1RgPyOhN4DRs225BGTlHJqCudII.jpg";
  return (
    <div
      className='h-[70vh] bg-[cover] bg-center flex items-end justify-center'
      style={{
        backgroundImage: `url('${url}')`
      }}
    >
      <div className="text-white text-3xl inline-block bg-gray-600/70">Demon Slayer: Kimetsu no Yaiba Infinity Castle</div>
    </div>
  )
}

export default HeroBanner