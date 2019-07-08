import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('<Button />', () => {
  it('should correctly render', () => {
    const props = {
      modifier: 'primary',
      onClick: jest.fn(),
      className: 'custom-class',
    };

    const tree = renderer
      .create(<Button {...props} />)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});