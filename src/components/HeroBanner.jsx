import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Info, ListPlus } from 'lucide-react'; // Using icons for a cleaner look

const trendingMovies = [
  {
    title: 'Demon Slayer: To the Hashira Training',
    overview: 'Tanjiro undergoes rigorous training with the Stone Hashira, Himejima, in his quest to become a Hashira. Meanwhile, Muzan continues to search for Nezuko and Ubuyashiki.',
    backdrop_path: '/1RgPyOhN4DRs225BGTlHJqCudII.jpg'
  },
  {
    title: 'Dune: Part Two',
    overview: 'Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.',
    backdrop_path: '/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg'
  },
];

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

function HeroBannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoize navigation functions to prevent unnecessary re-renders
  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? trendingMovies.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === trendingMovies.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // auto-playing the carousel
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(slideInterval);
  }, [nextSlide]);


  const currentMovie = trendingMovies[currentIndex];
  const imageUrl = `${BASE_IMAGE_URL}${currentMovie.backdrop_path}`;

  return (
    <div className="relative h-[70vh] w-full group">
      {/* Background Image & Overlay Container */}
      <div
        // The key is crucial! It tells React to re-render the element on change, which allows the transition to trigger.
        key={currentIndex}
        className="w-full h-full bg-center bg-cover transition-opacity duration-1000 ease-in-out"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-8 md:p-12 text-white">
        <div className="max-w-3xl space-y-4 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-bold">{currentMovie.title}</h1>
          <p className="text-sm md:text-base line-clamp-3">{currentMovie.overview}</p>
          <div className='flex gap-4'>
            <button className="flex gap-2 px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-400 transition-colors">
              More Info <Info />
            </button>
            <button className="flex gap-2 px-6 py-2 bg-[#FE000C] text-white font-semibold rounded-md hover:bg-red-800 transition-colors">
              Add to Watchlist <ListPlus />
            </button>
          </div>

        </div>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer hover:bg-black/60 transition-all">
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer hover:bg-black/60 transition-all">
        <ChevronRight onClick={nextSlide} size={30} />
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {trendingMovies.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === slideIndex ? 'bg-white scale-125' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroBannerCarousel;
