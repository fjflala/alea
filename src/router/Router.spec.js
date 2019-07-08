import React from 'react';
import renderer from 'react-test-renderer';
import Router from './Router';
import { Router as RouterDOM } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('<Router />', () => {
  it('should correctly render', () => {
    const tree = renderer
      .create(<RouterDOM history={createMemoryHistory({route: ['/']})}>
        <Router />
      </RouterDOM>)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});