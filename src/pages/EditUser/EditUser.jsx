/**
 * Module dependencies
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * Actions
 */
import { usersGetUser, usersEditUser, usersCleanEditedUser } from '../../modules/Users/actions';

/**
 * UI Components
 */
import Card from '../../components/Card';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Header from '../../components/Header';

/**
 * Import styles
 */
import './styles.scss';

/**
 * Represents a view of Edit User
 */
export const EditUser = ({
  match: {
    params: {
      userID,
    },
  },
  selectedUser,
  editedUser,
  getUser,
  editUser,
  cleanEditedUser,
}) => {
  const [user, setUser] = useState({
    avatar: '',
    first_name: '',
    last_name: '',
    email: '',
  });

  useEffect(() => {
    getUser({ userID });
    return () => {
      cleanEditedUser();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    }
  }, [selectedUser]);

  const onChangeValue = (field, value) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    editUser({
      userID: user.id,
      data: user,
    });
  };

  return (
    <React.Fragment>
      <Header />
      <section className="edit-user">
        <header>
          <h1>Edit User Page</h1>
        </header>
        <Card className="edit-user__card">
          {Object.keys(editedUser).length > 0 && (
            <p className="edit-user__message--success">
              Your user has been updated successfully.
              <br />
              <Link to="/users">Go to users list</Link>
            </p>
          )}
          <form onSubmit={onSubmit}>
            <img src={user.avatar} alt={user.first_name} />
            <br />
            <Input
              type="text"
              placeholder="Email"
              value={user.email}
              onChange={e => onChangeValue('email', e.target.value)}
            />
            <br />
            <Input
              type="text"
              placeholder="First Name"
              value={user.first_name}
              onChange={e => onChangeValue('first_name', e.target.value)}
            />
            <br />
            <Input
              type="text"
              placeholder="Last Name"
              value={user.last_name}
              onChange={e => onChangeValue('last_name', e.target.value)}
            />
            <br />
            <Link to="/users" className="ui-button ui-button--secondary edit-user__cancel-button">
              Cancel
            </Link>
            <Button type="submit" modifier="primary" className="edit-user__save-button">Save</Button>
          </form>
        </Card>
      </section>
    </React.Fragment>
  );
};

/**
 * PropTypes definitions 
 */
EditUser.propTypes = {
  match: PropTypes.shape({}).isRequired,
  selectedUser: PropTypes.shape({}),
  editedUser: PropTypes.shape({}),
  getUser: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
  cleanEditedUser: PropTypes.func.isRequired,
};

EditUser.defaultProps = {
  selectedUser: {},
  editedUser: {},
}

/**
 * Connect to store
 */
const mapStateToProps = state => ({
  selectedUser: state.users.selectedUser,
  editedUser: state.users.editedUser,
});

const mapDispatchToProps = {
  getUser: usersGetUser,
  editUser: usersEditUser,
  cleanEditedUser: usersCleanEditedUser,
};

/**
 * Expose component
 */
export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
