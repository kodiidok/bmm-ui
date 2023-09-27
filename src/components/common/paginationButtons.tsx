import React from 'react';
import styles from '@/styles/queryPage.module.css';
import '@/styles/fonts.module.css';
import { IconChevronLeft, IconChevronRight, IconChevronsLeft, IconChevronsRight } from '@tabler/icons-react';

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
    <div className={styles['pagination']}>
      <button
        className={styles['pagination-button']}
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        <IconChevronsLeft size={15} />
      </button>

      <button
        className={styles['pagination-button']}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IconChevronLeft size={15} />
      </button>

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`${styles['pagination-button']} ${pageNumber === currentPage ? styles['active'] : ''}`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}

      <button
        className={styles['pagination-button']}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IconChevronRight size={15} />
      </button>

      <button
        className={styles['pagination-button']}
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        <IconChevronsRight size={15} />
      </button>
    </div>
  );
};

export default PaginationButtons;
