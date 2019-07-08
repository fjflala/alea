import React from 'react';
import renderer from 'react-test-renderer';
import { CreateUser } from './CreateUser';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { mount } from 'enzyme'

describe('<CreateUser />', () => {
  let props;

  beforeEach(() => {
    props = {
      createUser: jest.fn(),
      cleanCreatedUser: jest.fn(),
      createdUser: {}
    };
  });

  it('should correctly render', () => {

    const tree = renderer
      .create(<Router history={createMemoryHistory({route: ['/user/create']})}>
        <CreateUser {...props} />
      </Router>)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('should call register method when click on register button', () => {
    const wrapper = mount(<Router history={createMemoryHistory({route: ['/user/create']})}>
      <CreateUser {...props} />
    </Router>);

    wrapper.find('form').simulate('submit');
    
    expect(props.createUser).toHaveBeenCalled();
  });

  it('should show an error message', () => {
    props.createdUser = {
      id: 1,
      first_name: 'Dan',
      last_name: 'Abramov',
      email: 'dan@abramov.net',
    };
    
    const wrapper = mount(<Router history={createMemoryHistory({route: ['/user/create']})}>
      <CreateUser {...props} />
    </Router>);
    
    expect(wrapper.find('.created-user__message--success').length).toBe(1);
  });
});