/*
 * Import NPM
 */
import { combineReducers } from 'redux';

/*
 * Local import
 */
import reducer from 'frontend/src/store/reducer';
import AnnouncementsReducer from 'frontend/src/store/reducers/AnnouncementsReducer';
/*
 * Code
 */

/*
 * Export
 */
export default combineReducers({
  reducer,
  AnnouncementsReducer,
});
