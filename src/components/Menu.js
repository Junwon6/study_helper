import React, { Component } from 'react';
import './Menu.css';

import { TOPIC_INFO } from './config';

class Menu extends Component {
    render() {
        const { onClick, topic } = this.props;

        return (
            <div className="menu">
                {TOPIC_INFO[topic].MENU.map(item => (<button style={{backgroundColor: TOPIC_INFO[topic].COLOR}} onClick={onClick} key={item}>{item}</button>))}
            </div>
        );
    }
}

export default Menu;