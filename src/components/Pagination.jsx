import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

function Pagination({ goToNextPage, goToPreviousPage, currentPage, totalPages }) {

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex items-center gap-2 bg-black text-white p-2 rounded-lg shadow-lg">
        <button
          onClick={goToPreviousPage}
          disabled={isFirstPage}
          className={`p-1 rounded-full transition-colors duration-200 ${isFirstPage ? 'text-gray-500 cursor-not-allowed' : 'hover:bg-gray-700'}`}
          aria-label="Previous Page"
        >
          <ArrowLeft size={24} />
        </button>

        <span className="text-xl font-semibold text-center">{currentPage} of {totalPages} pages</span>

        <button
          onClick={goToNextPage}
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