import * as usersService from '../../services/users';

import {
  USERS_GET_LIST_SUCCESSFUL,
  USERS_GET_LIST_ERROR,
  USERS_EDIT_USER_SUCCESSFUL,
  USERS_EDIT_USER_ERROR,
  USERS_GET_USER_SUCCESSFUL,
  USERS_GET_USER_ERROR,
  USERS_DELETE_USER_SUCCESSFUL,
  USERS_DELETE_USER_ERROR,
  USERS_CREATE_USER_SUCCESSFUL,
  USERS_CREATE_USER_ERROR,
  USERS_CLEAN_CREATED_USER,
  USERS_CLEAN_EDITED_USER,
} from './types';

/**
 * Get the users list
 * @param {object} payload
 * @param {number} payload.page - Get specific page
 */
export const usersGetList = payload => async (dispatch) => {
  try {
    const usersResponse = await usersService.getList(payload.page);
    return dispatch({
      type: USERS_GET_LIST_SUCCESSFUL,
      payload: usersResponse,
    });
  } catch (err) {
    return dispatch({
      type: USERS_GET_LIST_ERROR,
      payload: {
        page: null,
        per_page: null,
        total: null,
        total_pages: null,
        data: [],
        errorOnGetList: err.message,
      },
    });
  }
};

/**
 * Get user by id
 * @param {object} payload
 * @param {number} payload.userID - Get specific user
 */
export const usersGetUser = payload => async (dispatch) => {
  try {
    const usersResponse = await usersService.getUser(payload.userID);
    return dispatch({
      type: USERS_GET_USER_SUCCESSFUL,
      payload: usersResponse,
    });
  } catch (err) {
    return dispatch({
      type: USERS_GET_USER_ERROR,
      payload: {
        page: null,
        per_page: null,
        total: null,
        total_pages: null,
        data: [],
        errorOnGetUser: err.message,
      },
    });
  }
};

/**
 * Put edit user
 * @param {object} payload
 * @param {number} payload.userID - Edit specific user
 * @param {object} payload.data - Body of the user to edit
 */
export const usersEditUser = payload => async (dispatch) => {
  try {
    const usersResponse = await usersService.editUser(payload.userID, payload.data);
    return dispatch({
      type: USERS_EDIT_USER_SUCCESSFUL,
      payload: usersResponse,
    });
  } catch (err) {
    return dispatch({
      type: USERS_EDIT_USER_ERROR,
      payload: {
        errorOnEdit: err.message,
      },
    });
  }
};

/**
 * Delete user
 * @param {object} payload
 * @param {number} payload.userID - Delete specific user
 */
export const usersDeleteUser = payload => async (dispatch) => {
  try {
    await usersService.deleteUser(payload.userID);
    return dispatch({
      type: USERS_DELETE_USER_SUCCESSFUL,
      payload: payload.userID,
    });
  } catch (err) {
    return dispatch({
      type: USERS_DELETE_USER_ERROR,
      payload: {
        page: null,
        per_page: null,
        total: null,
        total_pages: null,
        data: [],
        errorOnGetList: err.message,
      },
    });
  }
};

/**
 * Create user
 * @param {object} payload
 * @param {object} payload.data - Body of the user
 */
export const usersCreateUser = payload => async (dispatch) => {
  try {
    const usersResponse = await usersService.createUser(payload.data);
    return dispatch({
      type: USERS_CREATE_USER_SUCCESSFUL,
      payload: usersResponse,
    });
  } catch (err) {
    return dispatch({
      type: USERS_CREATE_USER_ERROR,
      payload: {
        errorOnCreate: err.message,
      },
    });
  }
};

/**
 * Cleans state
 */
export const usersCleanCreatedUser = () => (dispatch) => {
  return dispatch({
    type: USERS_CLEAN_CREATED_USER,
  });
};

/**
 * Cleans state
 */
export const usersCleanEditedUser = () => (dispatch) => {
  return dispatch({
    type: USERS_CLEAN_EDITED_USER,
  });
};
