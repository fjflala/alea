/**
 * Module dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Import styles
 */
import './styles.scss';

/**
 * Represents a Card
 * @param {object} props - Props of the element
 * @param {string} props.className - Custom className for the card
 */
const Card = ({
  className,
  children,
}) => (
  <div className={`ui-card ${className}`}>
    {children}
  </div>
);

/**
 * PropTypes definitions
 */
Card.propTypes = {
  className: PropTypes.string,
};

Card.defaultProps = {
  className: '',
};

/**
 * Expose component
 */
export default Card;
