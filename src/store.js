import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { appReducer, flagsReducer } from './reducers';
import { thunk } from 'redux-thunk';

const reducer = combineReducers({
	appState: appReducer,
	flagsReducer: flagsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
