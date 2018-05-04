// var client = new XMLHttpRequest();
// client.open('GET', document.location, false);
// client.send();
// var headers = client.getResponseHeader('id');
// console.log(headers);

/*
 * Npm import
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import HomeVisiter from 'frontend/src/components/HomeVisiter';
import HomeMember from 'frontend/src/containers/HomeMember/HomeMember';
import GameList from 'frontend/src/containers/GameList/gameListContainer';
import Announcements from 'frontend/src/containers/Announcements/Announcements';
import Article from 'frontend/src/containers/Article/index';
import MyGames from 'frontend/src/containers/MyGames/MyGamesContainer';
import ReceiveMessages from 'frontend/src/containers/Messages/ReceiveMessages';
import Announce from 'frontend/src/containers/Announce';
/*
 * Code
 */
const App = ({ redirect, actions }) => {
  let bool = false;
  if (redirect.type) {
    bool = true;
    actions.changeTypeRouting();
  }
  return (
    <Router>
      <div id="app">
        {bool ? <Redirect to={redirect.route} /> : true }
        <Switch>
          <Route exact path="/app_dev.php" component={HomeVisiter} />
          <Route exact path="/app_dev.php/home" component={HomeMember} />
          <Route exact path="/app_dev.php/games" component={GameList} />
          <Route exact path="/app_dev.php/my-games" component={MyGames} />
          <Route exact path="/app_dev.php/announcements" component={Announcements} />
          <Route exact path="/app_dev.php/article/:id/:slug" component={Article} />
          <Route exact path="/app_dev.php/announcement/:id/:slug" component={Announce} />
          <Route exact path="/app_dev.php/message/receive" component={ReceiveMessages} />
          <Route exact path="/app_dev.php/account" component={() => <div>Account show</div>} />
          <Route exact path="/app_dev.php/my-profile" component={() => <div>My Profile show</div>} />
          <Route exact path="/app_dev.php/profile/:slug" component={() => <div>Other Profile show</div>} />
        </Switch>
      </div>
    </Router>
  );
};
App.propTypes = {
  redirect: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};
/*
 * Export default
 */
export default App;
