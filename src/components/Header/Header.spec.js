import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('<Header />', () => {
  it('should correctly render', () => {
    const tree = renderer
      .create(<Header />)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});