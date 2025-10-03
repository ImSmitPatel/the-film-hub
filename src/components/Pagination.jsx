import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

function Pagination({ totalPages = 10 }) {

  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;


  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex items-center gap-4 bg-black text-white p-2 rounded-lg shadow-lg">
        <button
          onClick={goToPreviousPage}
          disabled={isFirstPage}
          className={`p-1 rounded-full transition-colors duration-200 ${isFirstPage ? 'text-gray-500 cursor-not-allowed' : 'hover:bg-gray-700'}`}
          aria-label="Previous Page"
        >
          <ArrowLeft size={24} />
        </button>

        <span className="text-xl font-semibold w-8 text-center">{currentPage}</span>

        <button
          onClick={goToNextPage}
          disabled={isLastPage}
          className={`p-1 rounded-full transition-colors duration-200 ${isLastPage ? 'text-gray-500 cursor-not-allowed' : 'hover:bg-gray-700'}`}
          aria-label="Next Page"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default Pagination