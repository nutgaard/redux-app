import { Action } from 'redux';
import { createSelector } from 'reselect';
import { assertNever, log } from '../utils';
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
                value: Math.min(state.value + state.stepsize, 40)
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

const sliceSelector = (state: AppState) => state.counter;
const valueSelector = (state: CounterState) => state.value;
const stepsizeSelector = (state: CounterState) => state.stepsize;
function calculateFibonacci(n: number): number {
    if (n < 2) {
        return 1;
    }
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

export const selectCounterValue = createSelector(sliceSelector, valueSelector);
export const selectCounterStepsize = createSelector(sliceSelector, stepsizeSelector);
export const selectFibonacci = createSelector(selectCounterValue, log(calculateFibonacci));
