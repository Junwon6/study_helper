import React from 'react';
import ralf from './image/ralf.png';
import ned from './image/ned.png';
import actor1 from './image/actor1.png';
import o_image from './image/o.png';
import x_image from './image/x.png';

import './Logo.css';
import { AnimateOnChange } from 'react-animation';


const Logo = ({ topic, page_state }) => {
    switch (topic) {
        case 'dictionary':
            return (<AnimateOnChange animationIn="bounceIn"
                animationOut="bounceOut"
                durationOut={600}><div className="logo"><img id="logo" src={ned} alt="logo" /></div></AnimateOnChange>);
        case 'ENGINEER_INFORMATION_PROCESSING':
            switch (page_state) {
                case 'correct':
                    return (<AnimateOnChange animationIn="bounceIn"
                        animationOut="bounceOut"
                        durationOut={600}><div className="logo"><img id="logo" src={o_image} alt="logo" /></div></AnimateOnChange>);
                case 'wrong':
                    return (<AnimateOnChange animationIn="bounceIn"
                        animationOut="bounceOut"
                        durationOut={600}><div className="logo"><img id="logo" src={x_image} alt="logo" /></div></AnimateOnChange>);
                default:
                    return (<AnimateOnChange animationIn="bounceIn"
                        animationOut="bounceOut"
                        durationOut={600}><div className="logo"><img id="logo" src={ralf} alt="logo" /></div></AnimateOnChange>);
            }
        case 'EMBEDDED_SOFTWARE':
            switch (page_state) {
                case 'correct':
                    return (<AnimateOnChange animationIn="bounceIn"
                        animationOut="bounceOut"
                        durationOut={600}><div className="logo"><img id="logo" src={o_image} alt="logo" /></div></AnimateOnChange>);
                case 'wrong':
                    return (<AnimateOnChange animationIn="bounceIn"
                        animationOut="bounceOut"
                        durationOut={600}><div className="logo"><img id="logo" src={x_image} alt="logo" /></div></AnimateOnChange>);
                default:
                    return (<AnimateOnChange animationIn="bounceIn"
                        animationOut="bounceOut"
                        durationOut={600}><div className="logo"><img id="logo" src={actor1} alt="logo" /></div></AnimateOnChange>);
            }
        default:
            return (<div>no image</div>);
    }
};

export default Logo;

