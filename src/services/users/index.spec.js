import * as usersService from './index';
import restclient from '../restclient';

jest.mock('../restclient');

describe('Auth Service', () => {
  it('should call axios when getList method is invoked', () => {
    restclient.get.mockResolvedValue({
      total_pages: 4,
      per_page: 3,
      data: [{
        id: 1,
        first_name: 'Dan',
        last_name: 'Abramov',
        email: 'dan@abramov.com',
      }],
    });
    usersService.getList(1);
    expect(restclient.get).toHaveBeenCalled();
  });

  it('should call axios when getUser method is invoked', () => {
    restclient.get.mockResolvedValue({
      data: {
        id: 1,
        first_name: 'Dan',
        last_name: 'Abramov',
        email: 'dan@abramov.com',
      },
    });
    usersService.getUser(1);
    expect(restclient.get).toHaveBeenCalled();
  });

  it('should call axios when createUser method is invoked', () => {
    restclient.post.mockResolvedValue({});
    usersService.createUser({
      id: 1,
      first_name: 'Dan',
      last_name: 'Abramov',
      email: 'dan@abramov.com',
    });
    expect(restclient.post).toHaveBeenCalled();
  });
  
  it('should call axios when editUser method is invoked', () => {
    restclient.put.mockResolvedValue({
      data: {
        id: 1,
        first_name: 'Dan',
        last_name: 'Abramov',
        email: 'dan@abramov.com',
      },
    });
    usersService.editUser({
      id: 1,
      first_name: 'Dan',
      last_name: 'Abramov',
      email: 'dan@abramov.com',
    });
    expect(restclient.put).toHaveBeenCalled();
  });
  
  it('should call axios when deleteUser method is invoked', () => {
    restclient.delete.mockResolvedValue({});
    usersService.deleteUser(1);
    expect(restclient.delete).toHaveBeenCalled();
  });
});
