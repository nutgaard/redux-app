import * as React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import logo from './logo.svg';
import Intl from './intl';
import Menu from '../menu/menu';
import './hero.css';

function Hero() {
    return (
        <>
            <header className="hero">
                <img src={logo} className="hero__logo" alt="logo" />
                <h1 className="hero__title">
                    <FormattedMessage id={Intl.heroHeader} />
                </h1>
            </header>
            <Menu />
            <p className="hero__intro">
                <FormattedHTMLMessage id={Intl.heroIntro} />
            </p>
        </>
    );
}

export default Hero;
