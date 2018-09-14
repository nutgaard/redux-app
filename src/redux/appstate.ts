import { CounterState } from './ducks/counter';
import { BoredomState } from './ducks/boredom';

export interface AppState {
    counter: CounterState;
    boredom: BoredomState;
}
