import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from './Pagination';
import { mount } from 'enzyme';

describe('<Pagination />', () => {
  let props;

  beforeEach(() => {
    props = {
      className: 'custom-class',
      onChange: jest.fn(),
      totalPages: 5,
    };
  });

  it('should correctly render', () => {

    const tree = renderer
      .create(<Pagination {...props} />)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
  });

  it('should onChange prop', () => {
    const wrapper = mount(<Pagination {...props} />);

    wrapper.find('button').first().simulate('click');
    
    expect(props.onChange).toHaveBeenCalled();
    expect(props.onChange).toHaveBeenCalledWith(0);
  });
});