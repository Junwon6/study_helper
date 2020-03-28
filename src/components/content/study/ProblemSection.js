import React, { Component } from 'react';
import './ProblemSection.css'

class ProblemSection extends Component {
    render() {
        const { problem, content } = this.props;

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