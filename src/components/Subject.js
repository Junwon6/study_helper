import React, { Component } from 'react';
import './Subject.css';

const subject_items = ['computer', 'dictionary'];
const subject_color = {
    dictionary: '#00873a',
    computer: '#48689a',
}


class Subject extends Component {
    render() {
        const { onClick } = this.props;

        return (
            <div className="subject">
                {subject_items.map(item => (<button style={{backgroundColor: subject_color[item]}} onClick={onClick} key={item} subject-value={item}></button>))}
            </div>
        );
    }
}

export default Subject;