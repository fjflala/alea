/**
 * Module dependencies
 */
import restclient from '../restclient';

/**
 * logIn - Log the user
 * @param {object} data - body of the user email and password
 * @returns {Promise}
 */
export const logIn = (data) => {
  return restclient.post('/login', {
    ...data,
  }).then(res => res.data);
};

/**
 * register - Registers a new user
 * @param {object} data - body of the new user email and password.
 * @returns {Promise}
 */
export const register = (data) => {
  return restclient.post('/register', {
    ...data,
  }).then(res => res.data);
};
