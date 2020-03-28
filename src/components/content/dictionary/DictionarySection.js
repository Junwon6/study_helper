import React, { Component } from 'react';
import DictionaryTemplate from './DictionaryTemplate';
import Form from './Form';
import DefinitionSection from './DefinitionSection';

class DictionarySection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            keyword: '',
            definition: '',
        }
    }
    
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    handleSearch = () => {
        const { input } = this.state;

        fetch(`http://localhost:5050/search/${input}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    input: '',
                    keyword: input,
                    definition: json.definition.split(',').join(', ')
                })
            });
    }

    handleSave = () => {
        var data = {
            'word': this.state.keyword,
            'definition': this.state.definition
        }
        fetch('http://localhost:4000/save', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    alert('save success');
                }
                else {
                    alert('save fail');
                }
            });
    }

    handlekeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleSearch();
        }
    }
    render() {
        const { input, keyword, definition } = this.state;
        const {
          handleChange,
          handlekeyPress,
          handleSearch,
          handleSave,
        } = this;
        
        return (
            <DictionaryTemplate form={(
                <Form
                    value={input}
                    onChange={handleChange}
                    onClick={handleSearch}
                    onKeyPress={handlekeyPress}
                />
            )}>
                <DefinitionSection
                    keyword={keyword}
                    definition={definition}
                    onClick={handleSave}
                />
            </DictionaryTemplate>
        )        
    }
}

export default DictionarySection;