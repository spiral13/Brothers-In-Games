/*
 * Import NPM
 */
import { combineReducers } from 'redux';

/*
 * Local import
 */
import reducer from 'frontend/src/store/reducer';
import AnnouncementsReducer from 'frontend/src/store/reducers/AnnouncementsReducer';
import ArticleReducer from 'frontend/src/store/reducers/ArticleReducer';
/*
 * Code
 */

/*
 * Export
 */
export default combineReducers({
  reducer,
  AnnouncementsReducer,
  ArticleReducer,
});
