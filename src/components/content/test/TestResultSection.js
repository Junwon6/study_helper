import React, { Component } from 'react';
import './TestResultSection.css'

class TestResultSection extends Component {
    render() {
        const { list, toggle } = this.props;

        return (
            <div className="test_result_wrapper">
                <h1>Test result</h1>
                <table>
                    <thead>
                        <tr>
                            <th className="row_word">word</th>
                            <th className="row_answer">answer</th>
                            <th className="row_definition">definition</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item) => (
                            <tr key={item.no} style={{ color: ((item.correct ? 'blue' : 'red'))}}>
                                <td className="row_word">{item.word}</td>
                                <td className="row_answer"><input type="text" value={item.answer} disabled/></td>
                                <td className="row_definition">{item.definition}</td>
                            </tr>))}
                    </tbody>
                </table>
                <button onClick={toggle}>reset</button>
            </div>
        )
    }
}

export default TestResultSection;