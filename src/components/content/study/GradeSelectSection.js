import React from 'react';
import ToggleButton from './ToggleButton';

import { ENGINEER_INFORMATION_PROCESSING_PROBLEM_GRADE as EIP_PROBLEM_GRADE } from '../../config'

const LevelSelectSection = ({ changeSubjectState }) => {
    return (
        <div>
            {EIP_PROBLEM_GRADE.map(subject => (<ToggleButton value={subject} changeSubjectState={changeSubjectState}/>))}
        </div>
    );
};

export default LevelSelectSection;