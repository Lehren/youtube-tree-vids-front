import React from 'react';
import ReactDOM from 'react-dom';
import IntroText from '../components/IntroText/IntroText';
import { shallow } from 'enzyme';

describe(IntroText, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<IntroText />, div);
    });

    it('renders with the proper content', () => {
        const text = "Welcome to Youtube Trees! With this tool you can input any youtube video, " +
            "and it will make a playlist of the next 20 recommended videos. Handy to see where Youtube " +
            "autoplay makes you end up. Try it now!";
        const component = shallow(
            <IntroText/>
        );
        expect(component.find('h3').text()).toContain(text);
    });
});

