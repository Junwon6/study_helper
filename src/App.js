import React, { Component } from 'react';
import Topic from './components/Topic';
import Menu from './components/Menu';
import Content from './components/Content';
import Logo from './components/Logo';


import './App.css';

const topic = {
  dictionary: ['dictionary', 'history', 'test'],
  computer: ['study', 'input', 'search', 'etc'],
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: 'computer',
      page: 'study',
      page_state: 'normal'
    }
  }

  changePage = (e) => {
    this.setState({
      page: e.target.innerText
    });
  }

  changeSubject = (e) => {
    this.setState({
      topic: e.target.getAttribute('topic-value'),
      page: topic[e.target.getAttribute('topic-value')][0],
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
    const { changePage, changeSubject, changePageState } = this;

    return (
      <div className="whole_wrapper">
        <Topic onClick={changeSubject}/>
        <Logo topic={topic} page_state={page_state}/>
        <Menu topic={topic} onClick={changePage}/>
        <Content page={page} changePageState={changePageState}/>
      </div>
    )
  }
}

export default App;