import React, { Component } from 'react';

import DictionarySection from './content/dictionary/DictionarySection';
import HistorySection from './content/history/HistorySection';
import TestSection from './content/test/TestTemplate';
import StudySection from './content/study/StudySection';
import InsertSection from './content/problem_insert/InsertSection';
import ListSection from './content/problem_list/ListSection';

class Content extends Component {
    render() {
        const { topic, page, changePageState } = this.props;
        
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
            case 'list':
                return <ListSection topic={topic}/>
            default:
                return(<div>no result</div>);
        }
        
    }
}

export default Content;