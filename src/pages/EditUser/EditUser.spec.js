import React from 'react';
import renderer from 'react-test-renderer';
import { EditUser } from './EditUser';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { mount } from 'enzyme';

describe('<EditUser />', () => {
  let props;
  beforeEach(() => {
    props = {
      match: {
        params: {
          userID: 1,
        },
      },
      selectedUser: {
        id: 1,
        first_name: 'Dan',
        last_name: 'Abramov',
        email: 'dan@abramov.net',
      },
      getUser: jest.fn(),
      editUser: jest.fn(),
      cleanEditedUser: jest.fn(),
    };
  });

  it('should correctly render', () => {
    const tree = renderer
      .create(<Router history={createMemoryHistory({route: ['/user/1/edit']})}>
        <EditUser {...props} />
      </Router>)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('should call register method when click on register button', () => {
    const wrapper = mount(<Router history={createMemoryHistory({route: ['/user/1/edit']})}>
      <EditUser {...props} />
    </Router>);
    
    expect(props.getUser).toHaveBeenCalled();

    wrapper.find('form').simulate('submit');
    
    expect(props.editUser).toHaveBeenCalled();
  });

  it('should show an error message', () => {
    props.editedUser = {
      id: 1,
      first_name: 'Dan',
      last_name: 'Abramov',
      email: 'dan@abramov.net',
      updated_at: '09/12/2018',
    };
    
    const wrapper = mount(<Router history={createMemoryHistory({route: ['/user/1/edit']})}>
      <EditUser {...props} />
    </Router>);
    
    expect(wrapper.find('.edit-user__message--success').length).toBe(1);
  });
});