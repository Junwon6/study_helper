import React, { Component } from 'react';
import ProblemTemplate from './ProblemTemplate';
import SubjectSelectSection from './SubjectSelectSection';
import './StudySection.css';




class StudySection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            problem: '',
            content: '',
            problem_no: -1,
        }

        this.getProblem();
    }

    getProblem = () => {
        const { changePageState } = this.props;

        fetch('http://localhost:4000/getProblem', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    changePageState('normal');
                    this.setState({
                        problem: json.data[0].problem,
                        content: json.data[0].content,
                        problem_no: json.data[0].problem_no,
                        check_result: false
                    })
                }
            });
    }

    checkAnswer = () => {
        let elements = document.getElementsByClassName('user_answer')
        elements = Array.from(elements)
        const user_answer = elements.map(element => element.value);

        const { problem_no } = this.state;
        const { changePageState } = this.props;


        if (problem_no === -1) return;

        fetch('http://localhost:4000/study/check', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    problem_no: problem_no,
                    user_answer: user_answer
                }
            )
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    if (json.check_result.correct) {
                        changePageState('correct');
                    }
                    else {
                        changePageState('wrong');
                    }
                    this.setState({
                        check_result: json.check_result
                    })
                }
                else {
                    alert('check fail');
                }
            });
    }

    render() {
        const { problem, content, check_result } = this.state;
        const { getProblem, checkAnswer } = this;

        return (
            <div className="study_wrapper">
                <div className="study_sub_wrapper">
                    <ProblemTemplate
                        problem={problem}
                        content={content}
                        check_result={check_result}
                        getProblem={getProblem}
                        checkAnswer={checkAnswer} />
                </div>
                <SubjectSelectSection />
            </div>
        )
    }
}

export default StudySection;