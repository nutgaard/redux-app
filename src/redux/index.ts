import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './ducks/counter';
import boredomReducer from './ducks/boredom';
import { AppState } from './appstate';

const rootReducer = combineReducers<AppState>({
    counter: counterReducer,
    boredom: boredomReducer
});

// litt triksing for å få redux-devtools-extension til å fungere sammen med redux-thunk
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
