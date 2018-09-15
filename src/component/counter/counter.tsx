import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Intl from './intl';
import { AppState } from '../../redux/appstate';
import {
    decrement,
    increment,
    selectCounterStepsize,
    selectCounterValue,
    selectFibonacci,
    setStepsize
} from '../../redux/ducks/counter';
import './counter.css';

interface StateProps {
    value: number;
    stepsize: number;
    fibonacci: number;
}

interface DispatchProps {
    increment: typeof increment;
    decrement: typeof decrement;

    setStepsize(event: React.ChangeEvent<HTMLInputElement>): ReturnType<typeof setStepsize>
}

interface Props extends StateProps, DispatchProps {
    extra: string;
}

function Counter(props: Props) {
    return (
        <div className="counter">
            <label className="counter__stepsize">
                <FormattedMessage id={Intl.counterStepsize} />
                <input type="number" value={props.stepsize} onChange={props.setStepsize}/>
            </label>
            <div className="counter__buttons">
                <button onClick={props.decrement}>
                    <FormattedMessage id={Intl.counterDecrement} />
                </button>
                <p>{props.value}</p>
                <button onClick={props.increment}>
                    <FormattedMessage id={Intl.counterIncrement}/>
                </button>
            </div>
            <div>
                <FormattedMessage id={Intl.counterStepPlural} values={{ steps: props.value }}>
                    {(text: string) => (<p>Plural: {text}</p>)}
                </FormattedMessage>
                <FormattedMessage id={Intl.counterStepOrdinal} values={{ steps: props.value }}>
                    {(text: string) => (<p>Ordinal: {text}</p>)}
                </FormattedMessage>
                <p>{props.fibonacci}</p>
            </div>
            <p>{props.extra}</p>
        </div>
    );
}

const mapStateToProps = (state: AppState): StateProps => ({
    value: selectCounterValue(state),
    stepsize: selectCounterStepsize(state),
    fibonacci: selectFibonacci(state)
});
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    ...bindActionCreators({
        increment,
        decrement,
        setStepsize: (event: React.ChangeEvent<HTMLInputElement>) => setStepsize(event.target.value)
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
