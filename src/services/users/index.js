/**
 * Module dependencies
 */
import restclient from '../restclient';

/**
 * getList - Get list of the users
 * @param {number} page - Specific page to get
 * @returns {Promise}
 */
export const getList = page => restclient.get(`/users?page=${page}`)
  .then(res => res.data);

/**
 * getUser - Get user
 * @param {number} userID - Specific user
 * @returns {Promise}
 */
export const getUser = userID => restclient.get(`/users/${userID}`)
  .then(res => res.data.data);

/**
 * createUser - Create a users
 * @param {object} data - Body of the user
 * @returns {Promise}
 */
export const createUser = data => restclient.post('/users', {
  ...data,
}).then(res => res.data);

/**
 * editUser - Edit a user
 * @param {number} userID - ID of the user to edit
 * @param {object} data - Body of the user
 * @returns {Promise}
 */
export const editUser = (userID, data) => restclient.put(`/users/${userID}`, {
  ...data,
}).then(res => res.data);

/**
 * deleteUser - Delete a user
 * @param {number} userID - ID of the user to delete
 * @returns {Promise}
 */
export const deleteUser = userID => restclient.delete(`/users/${userID}`)
  .then(res => res.data);
