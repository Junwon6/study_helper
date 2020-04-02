import React, { Component } from 'react';
import './ProblemSection.css'

class ProblemSection extends Component {
    componentDidUpdate() {
        document.getElementsByClassName('user_answer')[0].focus()
    }
    componentDidMount() {
        const temp = document.getElementsByClassName('user_answer')[0];

        if (temp) {
            temp.focus();
        }
    }

    render() {
        const { problem, content } = this.props;
        if (problem === -1) {
            return (
                <div className="problem_wrapper">
                    <br/>
                    <h2>문제가 없습니다.</h2>
                </div>
            )
        }
        let problem_content = content.replace(/__answer/gi, '<input type="text" class="user_answer"/>')
            .replace(/__line/gi, '<br/>');

        return (
            <div className="problem_wrapper">
                <h2>{problem}</h2>
                <div
                    dangerouslySetInnerHTML={{
                        __html: problem_content
                    }}></div>
            </div>
        )
    }
}

export default ProblemSection;