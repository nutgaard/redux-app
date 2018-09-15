import * as React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import * as enLocale from 'react-intl/locale-data/en';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './redux';
import './application.css';
import logo from './logo.svg';
import messageBundle from './bundle'
import Intl from './intl';

import Home from './pages/home';
import About from './pages/about';
import Menu from './component/menu/menu';

addLocaleData(enLocale);

class Application extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <IntlProvider locale="en" messages={messageBundle.en}>
                    <Router>
                        <div className="App">
                            <header className="App-header">
                                <img src={logo} className="App-logo" alt="logo"/>
                                <h1 className="App-title">
                                    <FormattedMessage id={Intl.appHeader} />
                                </h1>
                            </header>
                            <Menu />
                            <p className="App-intro">
                                <FormattedHTMLMessage id={Intl.appIntro}/>
                            </p>
                            <Route exact={true} path="/" component={Home} />
                            <Route path="/home" component={Home} />
                            <Route path="/about" component={About} />
                        </div>
                    </Router>
                </IntlProvider>
            </Provider>
        );
    }
}

export default Application;
