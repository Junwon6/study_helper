import React from 'react';
import ToggleButton from './ToggleButton';

import { ENGINEER_INFORMATION_PROCESSING_SUBJECT as EIP_SUBJECT } from '../../config'

const SubjectSelectSection = ({ changeSubjectState }) => {
    return (
        <div>
            {EIP_SUBJECT.map(subject => (<ToggleButton value={subject} changeSubjectState={changeSubjectState}/>))}
        </div>
    );
};

export default SubjectSelectSection;