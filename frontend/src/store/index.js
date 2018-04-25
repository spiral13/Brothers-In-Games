/*
 * Npm import
 */
import { createStore, compose, applyMiddleware } from 'redux';

/*
 * Local import
 */
// Reducer
import MainReducer from 'frontend/src/store/MainReducer';

// Middleware
import SubmitConnect from './SubmitConnect';
import GetNews from './GetNews';
/*
 * Code
 */
// DevTools
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// Middleware vers Enhancers
const middlewares = applyMiddleware(SubmitConnect, GetNews);
const enhancers = compose(middlewares, ...devTools);

// createStore
const store = createStore(MainReducer, enhancers);

/*
 * Export
 */
export default store;
