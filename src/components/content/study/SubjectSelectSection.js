import React from 'react';
import ToggleButton from './ToggleButton';

import { SUBJECT } from '../../config'

const SubjectSelectSection = ({ topic, changeSubjectState }) => {
    return (
        <div>
            {SUBJECT[topic].map(subject => (<ToggleButton key={'subject_' + subject} value={subject} changeSubjectState={changeSubjectState}/>))}
        </div>
    );
};

export default SubjectSelectSection;