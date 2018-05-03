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
import ResponseReducer from 'frontend/src/store/reducers/ResponseReducer';
import FriendsReducer from 'frontend/src/store/reducers/FriendsReducer';
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
  ResponseReducer,
  FriendsReducer,
});
