/**
 * Module dependencies
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * Actions
 */
import { authLogIn } from '../../modules/Authentication/actions';

/**
 * UI Components
 */
import Button from '../../components/Button';
import Card from '../../components/Card';
import Input from '../../components/Input';

/**
 * Import styles
 */
import './styles.scss';

/**
 * Represents a view of Login
 */
export const Login = ({
  history,
  location,
  isAuthenticated,
  token,
  error,
  logIn,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();

    logIn({
      email,
      password,
    });
  };

  useEffect(() => {
    if (isAuthenticated && token.length > 0) {
      const nextPage = (location.state && location.state.from && location.state.from.pathname) || '/users';
      history.push(nextPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, isAuthenticated]);

  return (
    <section className="login">
      <Card className="login__card">
        <img
          src="https://www.alea.com/wp-content/themes/alea/library/images/logo-alea.svg"
          alt="Alea"
          className="login__alea-logo"
        />
        {error.length > 0 && (
          <p className="login__error-message">
            The email or password is not working.
            <br />
            You can test with the mocked values
          </p>
        )}
        <form onSubmit={onSubmit} className="login__form">
          <Input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <Button type="submit" modifier="primary" className="login__button">Login</Button>
        </form>
        <p>
          Or signup, click &nbsp;
          <Link to="/signup">here!</Link>
        </p>
      </Card>
      <Card className="login__card">
        <h4>Mocked Values</h4>
        <strong>User:</strong>
        &nbsp;eve.holt@reqres.in
        <br />
        <strong>Password:</strong>
        &nbsp;cityslicka
      </Card>
    </section>
  );
};

/**
 * PropTypes definitions 
 */
Login.propTypes = {
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  token: PropTypes.string,
  error: PropTypes.string,
  logIn: PropTypes.func.isRequired,
};

Login.defaultProps = {
  token: '',
  error: '',
};

/**
 * Connect to Store
 */
const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
  token: state.authentication.token,
  error: state.authentication.error,
});

const mapDispatchToProps = { logIn: authLogIn }

/**
 * Expose component
 */
export default connect(mapStateToProps, mapDispatchToProps)(Login);
