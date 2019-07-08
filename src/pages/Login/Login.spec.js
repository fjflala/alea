import React from 'react';
import renderer from 'react-test-renderer';
import { Login } from './Login';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { mount } from 'enzyme';

describe('<Login />', () => {
  let props; 
  
  beforeEach(() => {
    props = {
      isAuthenticated: false,
      token: '',
      error: '',
      logIn: jest.fn(),
      history: {},
      error: '',
      location: {},
    };
  });

  it('should correctly render', () => {
    const tree = renderer
      .create(<Router history={createMemoryHistory({route: ['/login']})}>
        <Login {...props} />
      </Router>)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('should call register method when click on register button', () => {
    const wrapper = mount(<Router history={createMemoryHistory({route: ['/signup']})}>
      <Login {...props} />
    </Router>);
    
    wrapper.find('form').simulate('submit');
    
    expect(props.logIn).toHaveBeenCalled();
  });

  it('should show an error message', () => {
    props.error = 'Error while trying to log the user into the application';
    const wrapper = mount(<Router history={createMemoryHistory({route: ['/signup']})}>
      <Login {...props} />
    </Router>);
    
    expect(wrapper.find('.login__error-message').length).toBe(1);
  });
});