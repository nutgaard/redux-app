import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { AppState } from '../../redux/appstate';
import { selectCounterStepsize, selectCounterValue, selectFibonacci } from '../../redux/ducks/counter';
import { selectBoredomStatus } from '../../redux/ducks/boredom';
import Intl from './intl';
import './summary.css'

interface Props {
    counterValue: number;
    counterStepSize: number;
    fibonacci: number;
    currentActivity?: string;
}

function Summary(props: Props) {
    return (
        <div className="summary">
            <p>
                <FormattedMessage id={Intl.summaryCounterStepsize} />
                <span>{props.counterStepSize}</span>
            </p>
            <p>
                <FormattedMessage id={Intl.summaryCounterValue} />
                <span>{props.counterValue}</span>
            </p>
            <p>
                <FormattedMessage id={Intl.summaryFibonacciText} />
                <span>{props.fibonacci}</span>
            </p>
            <p>
                <FormattedMessage id={Intl.summaryBoredomText} />
                <span>{props.currentActivity}</span>
            </p>
        </div>
    );
}
const mapStateToProps = (state: AppState): Props => ({
    counterValue: selectCounterValue(state),
    counterStepSize: selectCounterStepsize(state),
    fibonacci: selectFibonacci(state),
    currentActivity: selectBoredomStatus(state)
});

export default connect(mapStateToProps)(Summary);
