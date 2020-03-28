import React from 'react';

const DictionaryTemplate = ({form, children}) => {
    return (
        <main>
            <h1>Dictionary</h1>
            <section>
                {form}
            </section>
            <section>
                {children}
            </section>
        </main>
    );
};

export default DictionaryTemplate;