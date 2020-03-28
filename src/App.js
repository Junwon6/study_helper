import React, { Component } from 'react';
import Subject from './components/Subject';
import Menu from './components/Menu';
import Content from './components/Content';
import Logo from './components/Logo';


import './App.css';

const subject = {
  dictionary: ['dictionary', 'history', 'test'],
  computer: ['study', 'input', 'search', 'etc'],
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: 'computer',
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
      subject: e.target.getAttribute('subject-value'),
      page: subject[e.target.getAttribute('subject-value')][0],
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
    const { page, subject, page_state } = this.state;
    const { changePage, changeSubject, changePageState } = this;

    return (
      <div className="whole_wrapper">
        <Subject onClick={changeSubject}/>
        <Logo subject={subject} page_state={page_state}/>
        <Menu subject={subject} onClick={changePage}/>
        <Content page={page} changePageState={changePageState}/>
      </div>
    )
  }
}

export default App;