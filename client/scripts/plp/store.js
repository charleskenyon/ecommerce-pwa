import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

if (typeof window === 'undefined') global.window = {};
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(
	reducers,
	preloadedState,
	applyMiddleware(thunkMiddleware)
);

export default store;