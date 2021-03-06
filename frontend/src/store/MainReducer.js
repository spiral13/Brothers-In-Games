/*
 * Import NPM
 */
import { combineReducers } from 'redux';

/*
 * Local import
 */
import reducer from 'frontend/src/store/reducer';
import AnnouncementsReducer from 'frontend/src/store/reducers/AnnouncementsReducer';
import MyGamesReducer from 'frontend/src/store/reducers/MyGamesReducer';
import ArticleReducer from 'frontend/src/store/reducers/ArticleReducer';
import ResponseReducer from 'frontend/src/store/reducers/ResponseReducer';
import FriendsReducer from 'frontend/src/store/reducers/FriendsReducer';
import MessagesReducer from 'frontend/src/store/reducers/MessagesReducer';
import LoadingReducer from 'frontend/src/store/reducers/LoadingReducer';
import ProfileReducer from 'frontend/src/store/reducers/ProfileReducer';
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
  MyGamesReducer,
  MessagesReducer,
  LoadingReducer,
  ProfileReducer,
});
