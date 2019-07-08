/**
 * Module dependecies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Import styles
 */
import './styles.scss';

/**
 * Represents an Input
 * @param {object} props - Dynamic list of props based on html input properties
 * @param {string} props.className - Custom className for the element
 */
const Input = (props) => {
  const {
    className,
  } = props;

  const cn = `ui-input ${className && className}`;

  return (
    <input
      {...props}
      className={cn}
    />
  );
};

/**
 * PropTypes definitions
 */
Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

Input.defaultProps = {
  className: '',
  type: 'text',
  onChange: () => {},
  onFocus: () => {},
};

/**
 * Expose component
 */
export default Input;
