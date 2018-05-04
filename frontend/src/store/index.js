/*
 * Npm import
 */
import { createStore, compose, applyMiddleware } from 'redux';

/*
 * Local import
 */
// Reducer
import reducers from 'frontend/src/store/MainReducer';

// Middleware
import SubmitConnect from './SubmitConnect';
import GetNews from './GetNews';
import GetGames from './GetGames';
import GetAnnouncements from './Middlewares/GetAnnouncements';
import GetMyGames from './Middlewares/GetMyGames';
import GetArticle from './Middlewares/GetArticle';
import GetResponseToAnnounce from './Middlewares/GetResponseToAnnounce';
import GetFriends from './Middlewares/GetFriends';
import GetMessages from './Middlewares/GetMessages';
/*
 * Code
 */
// DevTools
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// Middleware vers Enhancers
const middlewares = applyMiddleware(
  SubmitConnect,
  GetNews,
  GetGames,
  GetAnnouncements,
  GetArticle,
  GetResponseToAnnounce,
  GetFriends,
  GetMyGames,
  GetMessages,
);
const enhancers = compose(middlewares, ...devTools);

// createStore
const store = createStore(reducers, enhancers);

/*
 * Export
 */
export default store;
