import * as React from 'react';
import Counter from './../component/counter/counter';
import Boredom from './../component/boredom/boredom';
import Summary from './../component/summary/summary';

function Home() {
    return (
        <>
            <Counter extra="My Props" />
            <Boredom />
            <Summary />
        </>
    );
}

export default Home;
