import React from 'react';
import renderer from 'react-test-renderer';
import { UsersList } from './UsersList';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { mount } from 'enzyme';

describe('<UsersList />', () => {
  let props;

  beforeEach(() => {
    props = {
      getList: jest.fn(),
      deleteUser: jest.fn(),
      usersState: {
        total_pages: 2,
        data: [{
          id: 1,
          first_name: 'Dan',
          last_name: 'Abramov',
          avatar: 'image',
          email: 'dan@abramov.net',
        }],
      },
    };
  });

  it('should correctly render', () => {
    const tree = renderer
      .create(<Router history={createMemoryHistory({route: ['/users']})}>
        <UsersList {...props} />
      </Router>)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('should call deleteUser action on click', () => {
    const wrapper = mount(<Router history={createMemoryHistory({route: ['/users']})}>
      <UsersList {...props} />
    </Router>);

    wrapper.find('.users-list__delete-user').simulate('click');

    expect(props.deleteUser).toHaveBeenCalled();
  });
});