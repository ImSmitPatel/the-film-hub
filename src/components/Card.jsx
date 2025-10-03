import React from 'react';

function Card({ movieTitle, movieImage }) {
  // Base URL for the movie poster images.
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w220_and_h330_face";

  // A fallback image in case the movieImage prop is null or invalid.
  const FALLBACK_IMAGE_URL = "https://via.placeholder.com/220x330?text=No+Image";

  const imageUrl = movieImage ? `${BASE_IMAGE_URL}${movieImage}` : FALLBACK_IMAGE_URL;

  return (
    <figure className="w-[220px] bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-outgroup">
      <img
        src={imageUrl}
        // Provide descriptive alt text for accessibility.
        alt={`Poster for ${movieTitle}`}
        // Lazy loading improves performance by only loading images as they enter the viewport.
        loading="lazy"
        className="w-full h-[330px] object-cover"
      />
      <figcaption className="p-3 text-center">
        <h3 className="text-gray-800 font-semibold truncate group-hover:text-blue-600">
          {movieTitle}
        </h3>
      </figcaption>
    </figure>
  );
}

export default Card;