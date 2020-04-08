import React, { Component } from 'react';
import './Topic.css';

import { TOPIC, TOPIC_INFO } from './config';

const topic_items = TOPIC;
const topic_info = TOPIC_INFO


class Topic extends Component {
    render() {
        const { onClick } = this.props;

        return (
            <div className="topic">
                {topic_items.map(item => (<button style={{backgroundColor: topic_info[item].COLOR}} onClick={onClick} key={item} topic-value={item}></button>))}
            </div>
        );
    }
}

export default Topic;