import React from 'react';

interface PaginationButtonsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationButtons = ({ currentPage, totalPages, onPageChange }: PaginationButtonsProps) => {
  const pagesToShow = 5; // Number of pagination buttons to show

  // Calculate the range of pages to display
  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  // Generate an array of page numbers to display
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        First
      </button>

      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`pagination-button ${pageNumber === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}

      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>

      <button
        className="pagination-button"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  );
};

export default PaginationButtons;
