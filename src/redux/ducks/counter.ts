import { Action } from 'redux';
import { assertNever } from '../utils';
import { AppState } from '../appstate';

enum TypeKeys {
    COUNTER_INCREMENT = 'COUNTER/INCREMENT',
    COUNTER_DECREMENT = 'COUNTER/DECREMENT',
    COUNTER_SET_STEPSIZE = 'COUNTER/SET_STEPSIZE',
}

interface Increment extends Action<TypeKeys.COUNTER_INCREMENT> {
}

interface Decrement extends Action<TypeKeys.COUNTER_DECREMENT> {
}

interface SetStepsize extends Action<TypeKeys.COUNTER_SET_STEPSIZE> {
    value: number;
}

type Actions = Increment | Decrement | SetStepsize;

export interface CounterState {
    value: number;
    stepsize: number;
}

const initialState: CounterState = {
    value: 0,
    stepsize: 1
};

export default function reducer(state: CounterState = initialState, action: Actions): CounterState {
    switch (action.type) {
        case TypeKeys.COUNTER_INCREMENT: {
            return {
                ...state,
                value: state.value + state.stepsize
            };
        }
        case TypeKeys.COUNTER_DECREMENT: {
            return {
                ...state,
                value: state.value - state.stepsize
            };
        }
        case TypeKeys.COUNTER_SET_STEPSIZE: {
            return {
                ...state,
                stepsize: action.value
            };
        }
        default: {
            assertNever(action);
            return state;
        }
    }
};

export function increment(): Increment {
    return {
        type: TypeKeys.COUNTER_INCREMENT
    }
}

export function decrement(): Decrement {
    return {
        type: TypeKeys.COUNTER_DECREMENT
    }
}

export function setStepsize(value: string): SetStepsize {
    return {
        type: TypeKeys.COUNTER_SET_STEPSIZE,
        value: (value && parseInt(value, 10)) || 1
    }
}

export function selectCounterValue(state: AppState): number {
    return state.counter.value;
}

export function selectCounterStepsize(state: AppState): number {
    return state.counter.stepsize;
}
