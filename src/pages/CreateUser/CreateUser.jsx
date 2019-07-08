/**
 * Module dependencies
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * UI Components
 */
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';

/**
 * Import styles
 */
import './styles.scss';
import { usersCreateUser, usersCleanCreatedUser } from '../../modules/Users/actions';

/**
 * Represents a view of Create user
 */
export const CreateUser = ({
  createUser,
  createdUser,
  cleanCreatedUser,
}) => {
  const [user, setUser] = useState({
    name: '',
    job: '',
  });

  useEffect(() => () => {
    cleanCreatedUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeValue = (field, value) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    createUser({
      data: user,
    });
  };

  return (
    <React.Fragment>
      <Header />
      <section className="create-user">
        <header>
          <h1>Create User</h1>
        </header>
        <Card className="create-user__card">
          {Object.keys(createdUser).length > 0 && (
          <p className="created-user__message--success">
            The new user had been created successfully
            <br />
            the ID of the new user is:
            {createdUser.id}
            <br />
            <Link to="/users">
              Go to users list
            </Link>
          </p>
          )}
          <form onSubmit={onSubmit}>
            <Input
              type="text"
              placeholder="Name"
              onChange={e => onChangeValue('name', e.target.value)}
              value={user.name}
            />
            <Input
              type="text"
              placeholder="Job"
              onChange={e => onChangeValue('job', e.target.value)}
              value={user.job}
            />
            <Link to="/users" className="ui-button ui-button--secondary create-user__cancel-button">
              Cancel
            </Link>
            <Button className="create-user__create-button" type="submit" modifier="primary">
              Create
            </Button>
          </form>
        </Card>
      </section>
    </React.Fragment>
  );
};

/**
 * PropTypes definitions 
 */
CreateUser.propTypes = {
  createdUser: PropTypes.shape({}),
  createUser: PropTypes.func.isRequired,
  cleanCreatedUser: PropTypes.func.isRequired,
};

CreateUser.defaultProps = {
  createdUser: {},
};

/**
 * Connect to store
 */
const mapStateToProps = state => ({
  createdUser: state.users.createdUser,
});

const mapDispatchToProps = {
  createUser: usersCreateUser,
  cleanCreatedUser: usersCleanCreatedUser,
};

/**
 * Expose component
 */
export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
