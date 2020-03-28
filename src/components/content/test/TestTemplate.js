import React, { Component } from 'react';
import TestSection from './TestSection';
import TestResultSection from './TestResultSection';

class TestTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'test',
            list: []
        }
    }

    componentDidMount(props) {
        this.setList();
    }

    setList = () => {
        fetch('http://localhost:4000/test', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    this.setState({
                        page: 'test',
                        list: json.list
                    })
                }
            });
    }

    submit = () => {
        const tableRows = document.getElementsByClassName('tableRow');
        const data = [];
        for (var item of tableRows) {
            const no = item.getAttribute('id');
            const answer = document.getElementById(no + '_answer').value;
            data.push({
                no: parseInt(no),
                answer: answer
            });
        }
        fetch('http://localhost:4000/testCheck', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ answer_list: data })
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    const data = json.data;
                    const keys = Object.keys(data);
                    let list = this.state.list;

                    for (const key of keys) {
                        for (let item of list) {
                            if (item.no === parseInt(key)) {
                                item.answer = data[key].answer;
                                item.definition = data[key].definition;
                                item.correct = data[key].correct;
                            }
                        }
                    }

                    this.setState({
                        page: 'test_result',
                        list: list
                    });
                }
                else {
                    alert('test check fail');
                }
            });
    }
    
    buttonToggle = () => {
        const { page } = this.state;

        switch (page) {
            case 'test':
                this.submit();
                break;
            case 'test_result':
                this.setList();
                break;
            default:
                break;
        }
    }

    render() {
        const { page, list } = this.state;
        const { buttonToggle } = this;
        
        switch (page) {
            case 'test':
                return <TestSection list={list} toggle={buttonToggle}/>
            case 'test_result':
                return <TestResultSection list={list} toggle={buttonToggle}/>
            default:
                return <div>error</div>
        }
    }
}

export default TestTemplate;