import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

export function assertNever(x: never): never {
    return x;
}

export function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
    return fetch(url, options)
        .then((resp) => {
            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.status}`);
            }
            return resp.json();
        });
}

export interface FetchDispatch<DATA, ACTIONS> {
    requesting(): ACTIONS;
    ok(json: DATA): ACTIONS;
    error(error: Error): ACTIONS;
}

export function fetchJsonThunk<DATA, ACTIONS extends Action>(url: string, actions: FetchDispatch<DATA, ACTIONS>, options?: RequestInit): ThunkAction<Promise<DATA | Error>, {}, {}, ACTIONS> {
    return (dispatch) => {
        dispatch(actions.requesting());

        return fetchJson(url, options)
            .then((json: DATA) => {
                dispatch(actions.ok(json));
                return json;
            })
            .catch((error: Error) => {
                dispatch(actions.error(error));
                return error;
            });
    }
}
