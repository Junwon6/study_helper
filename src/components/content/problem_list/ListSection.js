import React, { Component } from 'react';
import SubjectSelectSection from '../study/SubjectSelectSection'
import { SUBJECT } from '../../config'

import './ListSection.css'

class ListSection extends Component {
    constructor(props) {
        super(props)

        let subject_dict = {}
        SUBJECT[props.topic].forEach(subject => {
            subject_dict[subject] = false
        });
        
        this.state = {
            problem_list: [],
            subject_dict: subject_dict,
        }

        this.getList();
    }
    getList = () => {
        fetch('http://localhost:4000/getProblemList', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    subject_dict: this.state.subject_dict,
                }
            )
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    this.setState({
                        problem_list: json.data
                    })
                }
            });
    }    

    changeSubjectState = (subject, state) => {
        let temp = this.state.subject_dict;
        temp[subject] = state;

        this.setState({subject_dict: temp}, this.getList);
    }

    render() {
        const { problem_list } = this.state;
        const { topic } = this.props;
        const { changeSubjectState } = this;
        
        return (
            <div className='list_wrapper'>
                <SubjectSelectSection topic={topic} changeSubjectState={changeSubjectState}/>
                {problem_list.map(item => (<div className='list_item' key={'problem_' + item.problem_no} value={item.problem_no}>{item.problem}</div>))}
            </div>
        )
    }
}

export default ListSection;