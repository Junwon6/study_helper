import React from 'react';

const Form = ({value, onClick, onChange, onKeyPress}) => {
    return (
        <div>
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <button onClick={onClick}>search</button>
        </div>
    );
};

export default Form;