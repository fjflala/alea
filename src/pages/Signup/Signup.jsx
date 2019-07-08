/**
 * Modules dependencies
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * Actions
 */
import { authRegister } from '../../modules/Authentication/actions';

/**
 * UI Component
 */
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

/**
 * Import styles
 */
import './styles.scss';

/**
 * Represents a view of signup
 */
export const Signup = ({
  history,
  isAuthenticated,
  token,
  error,
  register,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();

    register({
      data: {
        email,
        password,
      },
    });
  };

  useEffect(() => {
    if (isAuthenticated && token.length > 0) {
      history.push('/users');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, token]);

  return (
    <section className="signup">
      <Card className="signup__card">
        <img
          src="https://www.alea.com/wp-content/themes/alea/library/images/logo-alea.svg"
          alt="Alea"
          className="signup__alea-logo"
        />
        {error.length > 0 && (
          <p className="signup__error-message">
            The register procces is mocked.
            <br />
            You can test with the mocked values
          </p>
        )}
        <form onSubmit={onSubmit}>
          <Input type="text" placeholder="email" onChange={e => setEmail(e.target.value)} />
          <Input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
          <Button type="submit" modifier="primary" className="signup__button">Signup</Button>
        </form>
        <p>
          If you already have an account, please &nbsp;
          <Link to="/login">login</Link>
        </p>
      </Card>
      <Card className="signup__card">
        <h4>Mocked Values</h4>
        <strong>User:</strong>
        &nbsp;eve.holt@reqres.in
        <br />
        <strong>Password:</strong>
        &nbsp;pistol
      </Card>
    </section>
  );
};

/**
 * PropTypes definitions 
 */
Signup.propTypes = {
  history: PropTypes.shape({}).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  token: PropTypes.string,
  error: PropTypes.string,
  register: PropTypes.func.isRequired,
};

Signup.defaultProps = {
  error: '',
  token: '',
};
 
/**
 * Connect to store
 */
const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
  token: state.authentication.token,
  error: state.authentication.error,
});

const mapDispatchToProps = {
  register: authRegister,
};

/**
 * Expose component
 */
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
