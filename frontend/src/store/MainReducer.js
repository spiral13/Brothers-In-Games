/*
 * Import NPM
 */
import { combineReducers } from 'redux';

/*
 * Local import
 */
import reducer from 'frontend/src/store/reducer';
/*
 * Code
 */
const MainReducer = combineReducers({
  reducer,
});

/*
 * Export
 */
export default reducer;
