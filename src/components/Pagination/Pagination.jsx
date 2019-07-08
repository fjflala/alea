/**
 * Module dependencies
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Import styles
 */
import './styles.scss';

/**
 * Represents a pagination
 * @param {object} props - Props of the element
 * @param {string} props.className - Custom className for the card
 * @param {number} props.totalPages - Total number of pages
 * @param {function} props.onChange - Callback when a element of the pagination is clicked
 */
const Pagination = ({
  totalPages,
  onChange,
  className,
}) => {
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    const quantityOfPages = totalPages && Array.from(Array(totalPages)).map((_, i) => i);
    setPages(quantityOfPages);
  }, [totalPages]);

  const onClickPage = (page) => {
    setSelectedPage(page);

    if (onChange && typeof onChange === 'function') {
      onChange(page);
    }
  };

  const cn = `ui-pagination ${className}`;

  return (
    <div className={cn}>
      <ol className="ui-pagination__list">
        {pages && pages.map(page => (
          <li
            key={page}
            className={`ui-pagination__item ${page === selectedPage ? 'ui-pagination__item--active' : ''}`}
          >
            <button
              type="button"
              onClick={() => onClickPage(page)}
            >
              {page + 1}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

/**
 * PropTypes definitions
 */
Pagination.propTypes = {
  totalPages: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

Pagination.defaultProps = {
  totalPages: 0,
  onChange: () => {},
  className: '',
};

/**
 * Expose component
 */
export default Pagination;
