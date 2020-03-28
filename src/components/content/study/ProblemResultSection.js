import React, { Component } from 'react';
import './ProblemResultSection.css'

class ProblemResultSection extends Component {
    render() {
        const { problem, content, check_list } = this.props;

        let problem_content = content.replace(/__line/gi, '<br/>');

        for (const item of check_list) {
            if (item.correct) {
                problem_content = problem_content.replace('__answer', `<span class="right_user_answer">${item.user_answer}</span>`)
            }
            else {
                problem_content = problem_content.replace('__answer', `<span class="wrong_user_answer">${item.user_answer}</span><span class="right_answer">${item.answer}</span>`)
            }
        }
        
        return (
            <div className="problem_result_wrapper">
                <h2>{problem}</h2>
                <div
                    dangerouslySetInnerHTML={{
                        __html: problem_content
                    }}></div>
            </div>
        )
    }
}

export default ProblemResultSection;