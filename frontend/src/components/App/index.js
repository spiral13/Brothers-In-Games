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
import CGU from 'frontend/src/containers/CGU/CGU';
import LegalInformation from 'frontend/src/containers/Legal/LegalInformation';
import ContactUs from 'frontend/src/containers/Contact/ContactUs';
import HomeMember from 'frontend/src/containers/HomeMember/HomeMember';
import GameList from 'frontend/src/containers/GameList/gameListContainer';
import Announcements from 'frontend/src/containers/Announcements/Announcements';
import Article from 'frontend/src/containers/Article/index';
import MyGames from 'frontend/src/containers/MyGames/MyGamesContainer';
import ReceiveMessages from 'frontend/src/containers/Messages/ReceiveMessages';
import ShowMessage from 'frontend/src/containers/Messages/ShowMessage';
import Announce from 'frontend/src/containers/Announce';
import MyProfile from 'frontend/src/containers/MyProfile/MyProfileContainer';
import MyAnnouncements from 'frontend/src/containers/MyAnnouncements';
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
        {bool ? <Redirect strict to={redirect.route} /> : true }
        <Switch>
          <Route exact path="" component={HomeVisiter} />
          <Route exact path="/home" component={HomeMember} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/CGU" component={CGU} />
          <Route exact path="/legal-mention" component={LegalInformation} />
          <Route exact path="/games" component={GameList} />
          <Route exact path="/my-games" component={MyGames} />
          <Route exact path="/announcements" component={Announcements} />
          <Route exact path="/my-announcements" component={MyAnnouncements} />
          <Route exact path="/article/:id/:slug" component={Article} />
          <Route exact path="/announcement/:id/:slug" component={Announce} />
          <Route exact path="/message/receive" component={ReceiveMessages} />
          <Route exact path="/message/show/:id" component={ShowMessage} />
          <Route exact path="/my-profile" component={MyProfile} />
          <Route exact path="/profile/:slug" component={() => <div>Other Profile show</div>} />
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
