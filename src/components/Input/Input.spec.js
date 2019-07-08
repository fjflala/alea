import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';

describe('<Input />', () => {
  it('should correctly render', () => {
    const props = {
      className: 'custom-class',
      onChange: jest.fn(),
      onFocus: jest.fn(),
    };

    const tree = renderer
      .create(<Input {...props} />)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});