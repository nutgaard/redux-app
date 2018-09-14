import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../redux/appstate';
import { decrement, increment, setStepsize, selectCounterStepsize, selectCounterValue } from '../../redux/ducks/counter';
import './counter.css';

interface StateProps {
    value: number;
    stepsize: number;
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
                <span>Stepsize:</span>
                <input type="number" value={props.stepsize} onChange={props.setStepsize}/>
            </label>
            <div className="counter__buttons">
                <button onClick={props.decrement}>-</button>
                <p>{props.value}</p>
                <button onClick={props.increment}>+</button>
            </div>
            <p>{props.extra}</p>
        </div>
    );
}

const mapStateToProps = (state: AppState): StateProps => ({
    value: selectCounterValue(state),
    stepsize: selectCounterStepsize(state)
});
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    ...bindActionCreators({
        increment,
        decrement,
        setStepsize: (event: React.ChangeEvent<HTMLInputElement>) => setStepsize(event.target.value)
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
