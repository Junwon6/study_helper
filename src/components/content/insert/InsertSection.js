import React, { Component } from 'react';
import './InsertSection.css'
import { SUBJECT } from '../../config'


class InputSection extends Component {
    reset = () => {
        document.getElementById('problem_input').value = '';
        document.getElementById('content_input').value = '';
        document.getElementById('answer_input').value = '';
    }

    save = () => {
        const problem = document.getElementById('problem_input').value;
        let content = document.getElementById('content_input').value;
        const answer = document.getElementById('answer_input').value;

        content = content.replace(/(?:\r\n|\r|\n)/g, '__line');

        const subject = document.getElementById('subject_select').value;
        const grade = document.getElementById('grade_select').value;
        const order = document.getElementById('order_check').checked;

        fetch('http://localhost:4000/study/save', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    problem: problem,
                    content: content,
                    answer: answer,
                    subject: subject,
                    grade: grade,
                    order: (order) ? 1 : 0
                }
            )
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    alert('save success');
                    this.reset();
                }
                else {
                    alert('save fail');
                }
            });
    }

    render() {
        const { reset, save } = this;
        const { topic } = this.props;

        console.log(topic)
        console.log(SUBJECT[topic])
        return (
            <div className="input_wrapper">
                <table>
                    <tbody>
                        <tr>
                            <td><span>과목 : </span></td>
                            <td>
                                <select name="subject" id="subject_select">
                                    {SUBJECT[topic].map(subject => (<option key={'option_' + subject} value={subject}>{subject}</option>))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><span>등급 : </span></td>
                            <td>
                                <select name="grade" id="grade_select">
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><span>질문 : </span></td>
                            <td><input type='text' id="problem_input" autoComplete="off" /></td>
                        </tr>
                        <tr>
                            <td><span>지문 : </span></td>
                            <td><textarea id="content_input"></textarea></td>
                        </tr>
                        <tr>
                            <td><span>답 : </span></td>
                            <td><input type='text' id="answer_input" autoComplete="off" /></td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <input type="checkbox" id="order_check" /> <label htmlFor="order_check"><span>정답의 순서가 있습니다.</span></label>
                </div>
                <button onClick={save}>저장</button>
                <button onClick={reset}>초기화</button>
            </div>
        )
    }
}

export default InputSection;