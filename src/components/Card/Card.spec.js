import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('<Card />', () => {
  it('should correctly render', () => {
    const props = {
      className: 'custom-class',
    };

    const tree = renderer
      .create(<Card {...props} />)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});