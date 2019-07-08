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
 * Represents a Button
 * @param {object} props - Props of the element
 * @param {function} props.onClick - Callback when element is clicked
 * @param {string} props.type - Type of button
 * @param {node} props.children - Children element
 * @param {string} props.className - Custom className of the button
 * @param {string} props.modifier - Modifiers for the element
 */
const Button = ({
  onClick,
  type,
  children,
  className,
  modifier,
}) => {
  const cn = `ui-button ${modifier ? `ui-button--${modifier}` : ''} ${className && className}`;
  return (
    <button
      type={type}
      className={cn}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

/**
 * PropTypes definitions
 */
Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  modifier: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  modifier: 'primary',
  className: '',
};

/**
 * Expose element
 */
export default Button;
