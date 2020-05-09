import React, { Component } from 'react';

import DictionarySection from './content/dictionary/DictionarySection';
import HistorySection from './content/history/HistorySection';
import TestSection from './content/test/TestTemplate';
import StudySection from './content/study/StudySection';
import InsertSection from './content/insert/InsertSection';

class Content extends Component {
    render() {
        const { topic, page,changePageState } = this.props;
        
        switch (page) {
            case 'dictionary':
                return <DictionarySection />
            case 'history':
                return <HistorySection />
            case 'test':
                return <TestSection />
            case 'study':
                return <StudySection topic={topic} changePageState={changePageState}/>
            case 'insert':
                return <InsertSection topic={topic}/>
            default:
                return(<div>no result</div>);
        }
        
    }
}

export default Content;