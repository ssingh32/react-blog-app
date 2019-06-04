import React from 'react';
import {LoginPage} from '../../components/LoginPage';
import { shallow } from 'enzyme';


test('should render Login Page correctly', () => {   
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogin on button click', () => {
    let startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
  })