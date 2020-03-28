import React from 'react';
import ToggleButton from './ToggleButton';

const Form = () => {
    return (
        <div>
            <ToggleButton value="소프트웨어 설계"/>
            <ToggleButton value="소프트웨어 개발"/>
            <ToggleButton value="데이터베이스 구축"/>
            <ToggleButton value="프로그래밍 언어 활용"/>
            <ToggleButton value="정보시스템 구축 관리"/>
        </div>
    );
};

export default Form;