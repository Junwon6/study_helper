import React, { Component } from 'react';
import './DefinitionSection.css'

class DefinitionSection extends Component {
    render() {
        const { keyword, definition, onClick } = this.props;
        return (
            <div className="definition_section_wrapper">
                <h2>{keyword}</h2>
                <div className="definition_wrapper">
                    {definition}
                </div>
                <div className="button_wrapper">
                    <button style={{ display: ((definition === '' ? 'none' : 'inline-block'))}} onClick={onClick}>save</button>
                </div>
            </div>
        )
    }
}

export default DefinitionSection;