/**
 * Module dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

/**
 * Represents a Private Route
 * @param {object} props - Props of the element
 * @param {string} props.path - Path of the route
 * @param {boolean} props.exact - Exact path
 * @param {node} props.component - Component to be rendered
 */
const PrivateRoute = ({
  isAuthenticated,
  path,
  exact,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    path={path}
    exact={exact}
    render={props => (
      isAuthenticated
        ? <Component {...props} />
        : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        )
    )}
  />
);

/**
 * PropTypes definitions
 */
PrivateRoute.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.node.isRequired,
};

PrivateRoute.defaultProps = {
  path: '',
  exact: false,
};

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

/**
 * Expose component
 */
export default connect(mapStateToProps)(PrivateRoute);
