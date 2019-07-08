/**
 * Module dependencies
 */
import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';

/**
 * UI Components
 */
import PrivateRoute from '../components/PrivateRoute';

/**
 * Pages
 */
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Users from '../pages/UsersList';
import EditUser from '../pages/EditUser';
import CreateUser from '../pages/CreateUser';
import NotFound from '../pages/NotFound';

/**
 * Represents a router of an application
 */
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={() => (<div>HOME</div>)} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/users/" exact component={Users} />
      <PrivateRoute path="/users/create" component={CreateUser} />
      <PrivateRoute path="/users/:userID/edit" component={EditUser} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

/**
 * Expose component
 */
export default Router;
