import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { findNew, selectBoredomStatus } from '../../redux/ducks/boredom';
import { AppState } from '../../redux/appstate';
import './boredrom.css';

interface StateProps {
    boredomResponse: string;
}
interface DispatchProps {
    findNew: typeof findNew
}
type Props = StateProps & DispatchProps;

function Boredom(props: Props) {
    return (
        <div className="boredom">
            <button className="boredom__button" onClick={props.findNew}>Find activity</button>
            <p>{props.boredomResponse}</p>
        </div>
    );
}

const mapStateToProps = (state: AppState): StateProps => ({
    boredomResponse: selectBoredomStatus(state)
});
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    ...bindActionCreators({
        findNew
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Boredom);
