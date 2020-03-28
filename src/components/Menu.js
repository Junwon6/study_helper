import React, { Component } from 'react';
import './Menu.css';

const menu_items = {
    dictionary: ['dictionary', 'history', 'test'],
    computer: ['study', 'input'],
}

const menu_color = {
    dictionary: '#00873a',
    computer: '#48689a',
}

class Menu extends Component {
    render() {
        const { onClick, subject } = this.props;

        return (
            <div className="menu">
                {menu_items[subject].map(item => (<button style={{backgroundColor: menu_color[subject]}} onClick={onClick} key={item}>{item}</button>))}
            </div>
        );
    }
}

export default Menu;