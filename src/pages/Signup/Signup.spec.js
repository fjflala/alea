import React from 'react';
import renderer from 'react-test-renderer';
import { Signup } from './Signup';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { mount } from 'enzyme';

describe('<Signup />', () => {
  let props;
  
  beforeEach(() => {
    props = {
      isAuthenticated: false,
      token: '',
      error: '',
      register: jest.fn(),
      history: {},
    };
  });

  it('should correctly render', () => {
    const tree = renderer
      .create(<Router history={createMemoryHistory({route: ['/signup']})}>
        <Signup {...props} />
      </Router>)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('should call register method when click on register button', () => {
    const wrapper = mount(<Router history={createMemoryHistory({route: ['/signup']})}>
      <Signup {...props} />
    </Router>);

    wrapper.find('form').simulate('submit');
    
    expect(props.register).toHaveBeenCalled();
  });

  it('should show an error message', () => {
    props.error = 'Error while trying to register user';
    const wrapper = mount(<Router history={createMemoryHistory({route: ['/signup']})}>
      <Signup {...props} />
    </Router>);
    
    expect(wrapper.find('.signup__error-message').length).toBe(1);
  });
});