import React from 'react';
import ProblemSection from './ProblemSection'
import ProblemResultSection from './ProblemResultSection'


const ProblemTemplate = ({ check_result, problem, content, getProblem, checkAnswer }) => {
    if (check_result) {
        return (
            <div>
                <ProblemResultSection problem={problem} content={content} check_list={check_result.check_list} />
                <button onClick={getProblem}>다음</button>
            </div>
        )
    }
    else {
        return (
            <div>
                <ProblemSection problem={problem} content={content} />
                <button onClick={checkAnswer}>정답</button>
                <button onClick={getProblem}>다음</button>
            </div>
        )
    }
};

export default ProblemTemplate;