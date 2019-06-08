import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should render game field', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("[data-marker='game-field']").exists()).toBe(true);
});
