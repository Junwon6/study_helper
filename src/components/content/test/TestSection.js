import React, { Component } from 'react';
import './TestSection.css'

class TestSection extends Component {
    render() {
        const { list, toggle } = this.props;

        return (
            <div className="test_wrapper">
                <h1>Test</h1>
                <table>
                    <thead>
                        <tr id="theadRow">
                            <th className="row_word">word</th>
                            <th>answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item) =>
                            <tr key={item.no} id={item.no} className="tableRow">
                                <td className="row_word">{item.word}</td>
                                <td><input type="text" id={item.no + '_answer'} /></td>
                            </tr>)}
                    </tbody>
                </table>
                <button onClick={toggle}>submit</button>
            </div>
        )
    }
}

export default TestSection;