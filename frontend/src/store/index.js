/*
 * Npm import
 */
import { createStore, compose, applyMiddleware } from 'redux';

/*
 * Local import
 */
// Reducer
import reducer from 'frontend/src/store/reducer';

// Middleware
import SubmitConnect from './SubmitConnect';

/*
 * Code
 */
// DevTools
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// Middleware vers Enhancers
const SubmitConnectEnhancer = applyMiddleware(SubmitConnect);
const enhancers = compose(SubmitConnectEnhancer, ...devTools);

// createStore
const store = createStore(reducer, enhancers);

/*
 * Export
 */
export default store;
