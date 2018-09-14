import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { assertNever } from '../utils';
import { AppState } from '../appstate';

enum TypeKeys {
    FIND_NEW_REQUEST = 'BOREDOM/FIND_NEW_REQUEST',
    FIND_NEW_OK = 'BOREDOM/FIND_NEW_OK',
    FIND_NEW_ERROR = 'BOREDOM/FIND_NEW_ERROR'
}

interface FindNewRequest extends Action<TypeKeys.FIND_NEW_REQUEST> {
}

interface FindNewError extends Action<TypeKeys.FIND_NEW_ERROR> {
    error: Error;
}

interface FindNewOk extends Action<TypeKeys.FIND_NEW_OK> {
    activity: string;
}

type Actions = FindNewRequest | FindNewError | FindNewOk;

interface OkState {
    type: TypeKeys.FIND_NEW_OK;
    activity: string;
}

interface ErrorState {
    type: TypeKeys.FIND_NEW_ERROR;
    error: Error;
}

interface RequestingState {
    type: TypeKeys.FIND_NEW_REQUEST;
    start: Date
}

export type BoredomState = OkState | ErrorState | RequestingState;

const initialState: BoredomState = {
    type: TypeKeys.FIND_NEW_OK,
    activity: 'Click the button to procastinate'
};

export default function reducer(state: BoredomState = initialState, action: Actions): BoredomState {
    switch (action.type) {
        case TypeKeys.FIND_NEW_REQUEST: {
            return {
                type: action.type,
                start: new Date()
            };
        }
        case TypeKeys.FIND_NEW_ERROR: {
            return {
                type: action.type,
                error: action.error
            };
        }
        case TypeKeys.FIND_NEW_OK: {
            return {
                type: action.type,
                activity: action.activity
            };
        }
        default: {
            assertNever(action);
            return state;
        }
    }
};

interface BoredomData {
    activity: string;
}

export function findNew(): ThunkAction<Promise<BoredomData>, AppState, {}, Actions> {
    return (dispatch) => {
        dispatch({ type: TypeKeys.FIND_NEW_REQUEST });

        return fetch(`https://www.boredapi.com/api/activity`)
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error(`Status: ${resp.status}`);
                }
                return resp.json();
            })
            .then((json) => {
                dispatch({ type: TypeKeys.FIND_NEW_OK, activity: json.activity });
                return json;
            }).catch((error: Error) => {
                dispatch({ type: TypeKeys.FIND_NEW_ERROR, error });
                return error;
            })
    }

}

export function selectBoredomStatus(state: AppState): string {
    const boredom = state.boredom;
    switch (boredom.type) {
        case TypeKeys.FIND_NEW_REQUEST:
            return `Requesting`;
        case TypeKeys.FIND_NEW_OK:
            return boredom.activity;
        case TypeKeys.FIND_NEW_ERROR:
            return boredom.error.message;
        default:
            assertNever(boredom);
            return "Unknown...";
    }
}
