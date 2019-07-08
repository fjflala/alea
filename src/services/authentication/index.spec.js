import * as authService from './index';
import restclient from '../restclient';

jest.mock('../restclient');

describe('Auth Service', () => {
  it('should call axios when logIn method is invoked', () => {
    restclient.post.mockResolvedValue({});
    authService.logIn();
    expect(restclient.post).toHaveBeenCalled();
  });

  it('should call axios when register method is invoked', () => {
    restclient.post.mockResolvedValue({});
    authService.register();
    expect(restclient.post).toHaveBeenCalled();
  });
});