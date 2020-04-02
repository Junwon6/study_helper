import React from 'react';
import ToggleButton from './ToggleButton';

const SubjectSelectSection = ({ changeSubjectState }) => {
    return (
        <div>
            <ToggleButton value="소프트웨어 설계" changeSubjectState={changeSubjectState}/>
            <ToggleButton value="소프트웨어 개발" changeSubjectState={changeSubjectState}/>
            <ToggleButton value="데이터베이스 구축" changeSubjectState={changeSubjectState}/>
            <ToggleButton value="프로그래밍 언어 활용" changeSubjectState={changeSubjectState}/>
            <ToggleButton value="정보시스템 구축 관리" changeSubjectState={changeSubjectState}/>
        </div>
    );
};

export default SubjectSelectSection;