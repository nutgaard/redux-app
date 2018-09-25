import * as React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import * as enLocale from 'react-intl/locale-data/en';
import { BrowserRouter as Router } from 'react-router-dom';
import Stepcontainer from './component/steps/stepcontainer';
// import * as createLoadable from 'react-loadable';

import store from './redux';
import './application.css';
import messageBundle from './bundle'
// import Hero from './component/hero/hero';
// import Loading from './component/loading/loading';
import Intl from './component/steps/intl';
import Step1 from './component/steps/step1';
import Step2 from './component/steps/step2';
import Step3 from './component/steps/step3';

// const Home = createLoadable({
//     loader: () => import('./pages/home'),
//     loading: Loading
// });
// const About = createLoadable({
//     loader: () => import('./pages/about'),
//     loading: Loading
// });

const stepconfig = [
    { title: Intl.step1Title, component: Step1 },
    { title: Intl.step2Title, component: Step2 },
    { title: Intl.step3Title, component: Step3 },
];

addLocaleData(enLocale);

class Application extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <IntlProvider locale="en" messages={messageBundle.en}>
                    <Router>
                        <Stepcontainer stepconfig={stepconfig} />
                    </Router>
                </IntlProvider>
            </Provider>
        );
    }
}

export default Application;
