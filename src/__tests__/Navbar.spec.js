import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; //import the adapter

import Navbar from '../components/Navbar/Navbar';

Enzyme.configure({ adapter: new Adapter() }); //configure Enzyme

// describe('Navbar', () => {
//   it('renders without crashing', () => {
//     shallow(<Navbar />);
//   });

