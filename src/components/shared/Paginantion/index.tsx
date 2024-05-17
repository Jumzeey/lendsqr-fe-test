import React from 'react';
import './index.scss';
import next from '../../../assets/nextbtn.svg'
import prev from '../../../assets/prevbtn.svg'
import { IPaginationProps } from '../../../lib/types';

const Pagination: React.FC<IPaginationProps> = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
    onItemsPerPageChange,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    // Function to determine the range of visible page buttons
    const getPageRange = () => {
        const visiblePages = 3; // Number of visible page buttons
        let start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
        let end = Math.min(totalPages, start + visiblePages - 1);
        if (end === totalPages) {
            start = Math.max(1, end - visiblePages + 1);
        }
        return { start: start, end: end };
    };

    const { start, end } = getPageRange();

    return (
        <div className="pagination-container">
            <div className='info'>
                <span>Showing</span>
                <select
                    value={itemsPerPage}
                    className='info-select'
                    onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
                >
                    <option value={20}>20</option>
                    <option value={35}>35</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
                <span>out of {totalItems}</span>
            </div>
            <div className="pagination-controls">
                <button
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    <img src={prev} alt="" />
                </button>
                {/* Display page buttons */}
                {pageNumbers.slice(start - 1, end).map((number) => (
                    <p
                        key={number}
                        className={`${currentPage === number ? 'active' : 'inactive'} page-numbers`}
                        onClick={() => onPageChange(number)}
                    >
                        {number}
                    </p>
                ))}
                {/* Display ellipses before the last two page buttons */}
                {end < totalPages && (
                    <>
                        {end < totalPages - 1 && <span className='dots'>...</span>}
                        <p 
                            className={`${currentPage === totalPages - 1 ? 'active' : 'inactive'} page-numbers`}
                            onClick={() => onPageChange(totalPages - 1)}
                        >
                            {totalPages - 1}
                        </p>
                        <p
                            className={`${currentPage === totalPages ? 'active' : 'inactive'} page-numbers`}
                            onClick={() => onPageChange(totalPages)}
                        >
                            {totalPages}
                        </p>
                    </>
                )}
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                >
                   <img src={next} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
