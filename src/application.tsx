import * as React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import * as enLocale from 'react-intl/locale-data/en';

import store from './redux';
import './application.css';
import logo from './logo.svg';
import Counter from './component/counter/counter';
import Boredom from './component/boredom/boredom';
import Summary from './component/summary/summary';
import messageBundle from './bundle'
import Intl from './intl';

addLocaleData(enLocale);

class Application extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <IntlProvider locale="en" messages={messageBundle.en}>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h1 className="App-title">
                                <FormattedMessage id={Intl.appHeader} />
                            </h1>
                        </header>
                        <p className="App-intro">
                            <FormattedHTMLMessage id={Intl.appIntro}/>
                        </p>
                        <Counter extra="My Props" />
                        <Boredom />
                        <Summary />
                    </div>
                </IntlProvider>
            </Provider>
        );
    }
}

export default Application;
