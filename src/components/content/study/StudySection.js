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
            subject_dict: {
                '소프트웨어 설계': false,
                '소프트웨어 개발': false,
                '데이터베이스 구축': false,
                '프로그래밍 언어 활용': false,
                '정보시스템 구축 관리': false
            }
        }

        this.getProblem();
    }

    getProblem = () => {
        const { changePageState } = this.props;
        const { subject_dict } = this.state;

        fetch('http://localhost:4000/getProblem', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    subject_dict: subject_dict
                }
            )
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    if (json.data.length !== 0) {
                        changePageState('normal');
                        this.setState({
                            problem: json.data[0].problem,
                            content: json.data[0].content,
                            problem_no: json.data[0].problem_no,
                            check_result: false
                        })
                    }
                    else {
                        changePageState('no_data');
                        this.setState({
                            problem: -1,
                            content: -1,
                            problem_no: -1,
                            check_result: false
                        })
                    }
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

    changeSubjectState = (subject, state) => {
        let temp = this.state.subject_dict;
        temp[subject] = state;

        this.setState({subject_dict: temp});
        this.getProblem();
    }

    render() {
        const { problem, content, check_result } = this.state;
        const { getProblem, checkAnswer, changeSubjectState } = this;

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
                <SubjectSelectSection changeSubjectState={changeSubjectState}/>
            </div>
        )
    }
}

export default StudySection;