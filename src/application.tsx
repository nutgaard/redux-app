import * as React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import * as enLocale from 'react-intl/locale-data/en';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as createLoadable from 'react-loadable';

import store from './redux';
import './application.css';
import messageBundle from './bundle'
import Hero from './component/hero/hero';
import Loading from './component/loading/loading';

const Home = createLoadable({
    loader: () => import('./pages/home'),
    loading: Loading
});
const About = createLoadable({
    loader: () => import('./pages/about'),
    loading: Loading
});

addLocaleData(enLocale);

class Application extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <IntlProvider locale="en" messages={messageBundle.en}>
                    <Router>
                        <div className="App">
                            <Hero />
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
