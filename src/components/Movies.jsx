import React from 'react'
import Banner from './Banner'
import Card from './Card'

function Movies() {
  return (
    <div>
      <Banner />
      <div className='text-3xl font-bold text-center mt-8 mb-5'>
        <h1>Trending Movies</h1>
      </div>
      <div className='flex flex-wrap gap-8 m-18 justify-center'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Movies