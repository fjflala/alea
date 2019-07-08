/**
 * Module dependencies
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * UI components
 */
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import Header from '../../components/Header';

/**
 * Actions
 */
import { usersGetList, usersDeleteUser } from '../../modules/Users/actions';

/**
 * Import styles
 */
import './styles.scss';

/**
 * Represents a view of Users List
 */
export const UsersList = ({
  getList,
  deleteUser,
  usersState,
  userDeletedSuccessfully,
}) => {
  useEffect(() => {
    getList({
      page: 1,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangePagination = (selectedPage) => {
    getList({
      page: selectedPage + 1,
    });
  };

  return (
    <React.Fragment>
      <Header />
      <section className="users-list">
        <header className="users-list__header">
          <h1>Users</h1>
          <Link
            to="/users/create"
            className="ui-button ui-button--primary users-list__button"
          >
            Create User
          </Link>
        </header>
        <Card className="users-list__table-container">
          {userDeletedSuccessfully && <p>User deleted successfully</p>}
          <table className="users-list__table">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Email</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersState.data && usersState.data.map(user => (
                <tr key={user.id}>
                  <td>
                    <img className="users-list__avatar" src={user.avatar} alt={user.email} />
                  </td>
                  <td>
                    {user.email}
                  </td>
                  <td>
                    {user.first_name}
                    &nbsp;
                    {user.last_name}
                  </td>
                  <td>
                    <Link to={`/users/${user.id}/edit`}>
                      Edit
                    </Link>
                    &nbsp;
                    |
                    &nbsp;
                    <button
                      className="users-list__delete-user"
                      onClick={() => deleteUser({
                        userID: user.id,
                      })}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Pagination totalPages={usersState.total_pages} onChange={onChangePagination} />
      </section>
    </React.Fragment>
  );
};

/**
 * PropTypes definitios 
 */
UsersList.propTypes = {
  getList: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  usersState: PropTypes.shape({}).isRequired,
  userDeletedSuccessfully: PropTypes.bool,
};

UsersList.defaultProps = {
  userDeletedSuccessfully: false,
};

/**
 * Connect to store
 */
const mapStateToProps = state => ({
  usersState: state.users,
  userDeletedSuccessfully: state.users.userDeletedSuccessfully,
});

const mapDispatchToProps = {
  getList: usersGetList,
  deleteUser: usersDeleteUser,
};

/**
 * Expose component
 */
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
