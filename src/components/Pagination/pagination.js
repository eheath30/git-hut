import React from 'react';
import { Link } from 'react-router-dom'

const Pagination = ({ reposPerPage, totalRepos, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='pagination'>
      {pageNumbers.map(number => (
        <li key={number} className='page-item'>
          <a onClick={() => paginate(number)} className='page-link'>
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
