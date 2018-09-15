import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Application from './application';
import './index.css';

// tslint:disable no-var-requires
if (process.env.REACT_APP_MOCK === 'true') {
    require('./mock');
}
// tslint:enable


ReactDOM.render(<Application />, document.getElementById('root') as HTMLElement);
