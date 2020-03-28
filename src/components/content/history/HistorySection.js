import React, { Component } from 'react';
import './HistorySection.css';

class HistorySection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount(props) {
        this.setList();
    }

    setList = () => {
        fetch('http://localhost:4000/list', {
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
                        list: json.list
                    })
                }
            });
    }

    render() {
        const { list } = this.state;

        return (
            <div className="history_wrapper">
                <h1>History</h1>
                <table>
                    <thead>
                        <tr>
                            <th>word</th>
                            <th>definition</th>
                            <th>date</th>
                            <th>check</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item) => (
                            <tr key={item.no}>
                                <td>{item.word}</td>
                                <td>{item.definition}</td>
                                <td>{item.date}</td>
                                <td>{(item.check === 0) ? 'X' : 'O'}</td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default HistorySection;