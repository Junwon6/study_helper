import React, { Component } from 'react';

import DictionarySection from './content/dictionary/DictionarySection';
import HistorySection from './content/history/HistorySection';
import TestSection from './content/test/TestTemplate';
import StudySection from './content/study/StudySection';
import InputSection from './content/input/InputSection';

class Content extends Component {
    render() {
        const page = this.props.page;
        const { changePageState } = this.props;

        switch (page) {
            case 'dictionary':
                return <DictionarySection />
            case 'history':
                return <HistorySection />
            case 'test':
                return <TestSection />
            case 'study':
                return <StudySection changePageState={changePageState}/>
            case 'input':
                return <InputSection />
            default:
                return(<div>no result</div>);
        }
        
    }
}

export default Content;