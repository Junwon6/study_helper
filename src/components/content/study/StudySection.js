import React, { Component } from 'react';
import ProblemTemplate from './ProblemTemplate';
import SubjectSelectSection from './SubjectSelectSection';
import LevelSelectSection from './GradeSelectSection';
import './StudySection.css';
import { SUBJECT } from '../../config'



class StudySection extends Component {
    constructor(props) {
        super(props);

        let subject_dict = {}
        SUBJECT[props.topic].forEach(subject => {
            subject_dict[subject] = false
        });
        
        this.state = {
            problem: '',
            content: '',
            problem_no: -1,
            subject_dict: subject_dict,
            problem_grade_dict: {
                'A': false,
                'B': false,
                'C': false,
                'D': false
            }
        }
        this.getProblem(null);
    }

    shouldComponentUpdate(nextProps) {
        const { topic } = this.props;
        const next_topic = nextProps.topic
        if (topic !== next_topic) {
            let subject_dict = {}
            SUBJECT[next_topic].forEach(subject => {
                subject_dict[subject] = false
            });
            this.setState({
                subject_dict:subject_dict
            })
            this.getProblem(subject_dict)
        }
        return true;
    }
    nextProblem = () => {
        this.getProblem(null);
    }
    getProblem = (_subject_dict) => {
        const { changePageState } = this.props;
        const { problem_grade_dict } = this.state;
        let { subject_dict } = this.state;

        if (_subject_dict) {
            subject_dict = _subject_dict
        }
        
        fetch('http://localhost:4000/getProblem', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    subject_dict: subject_dict,
                    problem_grade_dict: problem_grade_dict
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
        this.getProblem(null);
    }

    changeProblemLevelState = (problem_grade, state) => {
        let temp = this.state.problem_grade_dict;
        temp[problem_grade] = state;

        this.setState({problem_grade_dict: temp});
        this.getProblem(null);
    }

    render() {
        const { topic } = this.props;
        const { problem, content, check_result } = this.state;
        const { nextProblem, checkAnswer, changeSubjectState, changeProblemLevelState } = this;

        return (
            <div className="study_wrapper">
                <div className="study_sub_wrapper">
                    <ProblemTemplate
                        problem={problem}
                        content={content}
                        check_result={check_result}
                        getProblem={nextProblem}
                        checkAnswer={checkAnswer} />
                </div>
                <SubjectSelectSection topic={topic} changeSubjectState={changeSubjectState}/>
                <LevelSelectSection changeSubjectState={changeProblemLevelState}/>
            </div>
        )
    }
}

export default StudySection;