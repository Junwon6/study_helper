import React, { Component } from 'react';
import TopicSelection from './components/TopicSelection';
import Menu from './components/Menu';
import Content from './components/Content';
import Logo from './components/Logo';

import { TOPIC_INFO } from './components/config'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: 'EMBEDDED_SOFTWARE',
      page: 'study',
      page_state: 'normal'
    }
  }

  changePage = (e) => {
    this.setState({
      page: e.target.innerText
    });
  }

  changeTopic = (e) => {
    this.setState({
      topic: e.target.getAttribute('topic-value'),
      page: TOPIC_INFO[e.target.getAttribute('topic-value')]['MENU'][0],
      page_state: 'normal'
    });
  }

  changePageState = (page_state) => {
    if (this.state.page_state !== page_state) {
      this.setState({
        page_state: page_state
      })  
    }
  }

  render() {
    const { page, topic, page_state } = this.state;
    const { changePage, changeTopic, changePageState } = this;

    return (
      <div className="whole_wrapper">
        <TopicSelection onClick={changeTopic}/>
        <Logo topic={topic} page_state={page_state}/>
        <Menu topic={topic} onClick={changePage}/>
        <Content topic={topic} page={page} changePageState={changePageState}/>
      </div>
    )
  }
}

export default App;