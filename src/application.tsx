import * as React from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import './application.css';

import logo from './logo.svg';
import Counter from './component/counter';
import Boredom from './component/boredom';

class Application extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <Counter extra="My Props" />
                    <Boredom />
                </div>
            </Provider>
        );
    }
}

export default Application;
