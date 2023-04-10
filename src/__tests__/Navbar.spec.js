import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; //import the adapter

import Navbar from '../components/Navbar/Navbar';

Enzyme.configure({ adapter: new Adapter() }); //configure Enzyme

describe('Navbar', () => {
  it('renders without crashing', () => {
    shallow(<Navbar />);
  });

  it('toggles the menu when the menu icon is clicked', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.state().toggleMenu).toBe(false);
    wrapper.find('.navbar-menu-icon').simulate('click');
    expect(wrapper.state().toggleMenu).toBe(true);
    wrapper.find('.navbar-menu-icon').simulate('click');
    expect(wrapper.state().toggleMenu).toBe(false);
  });

  it('renders the menu when the menu icon is clicked', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('.navbar-menu-container')).toHaveLength(0);
    wrapper.find('.navbar-menu-icon').simulate('click');
    expect(wrapper.find('.navbar-menu-container')).toHaveLength(1);
  });

  it('hides the menu when a menu item is clicked', () => {
    const wrapper = shallow(<Navbar />);
    wrapper.find('.navbar-menu-icon').simulate('click');
    expect(wrapper.find('.navbar-menu-container')).toHaveLength(1);
    wrapper.find('.navbar-menu-container a').first().simulate('click', { button: 0 });
    expect(wrapper.find('.navbar-menu-container')).toHaveLength(0);
  });
});
