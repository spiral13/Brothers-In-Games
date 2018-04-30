/*
 * Npm import
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


/*
 * Local import
 */
import HomeVisiter from 'frontend/src/components/HomeVisiter';
import HomeMember from 'frontend/src/containers/HomeMember/HomeMember';
import GameList from 'frontend/src/containers/GameList/gameListContainer';
import Announcements from 'frontend/src/containers/Announcements/Announcements';
import Article from 'frontend/src/containers/Article/index';
/*
 * Code
 */

const App = () => (
  <Router>
    <div id="app">
      {/* Nous pouvons ajouter autant de pages que souhaité  */}
      <Switch>
        {/* eslint-disable-next-line */}
        <Route exact path={Routing.generate('home_visitor')} component={HomeVisiter} />
        {/* eslint-disable-next-line */}
        <Route exact path={Routing.generate('home_user')} component={HomeMember} />
        {/* eslint-disable-next-line */}
        <Route exact path={Routing.generate('games_list')} component={GameList} />
        {/* eslint-disable-next-line */}
        <Route exact path={Routing.generate('announcements_list')} component={Announcements} />
        {/* eslint-disable-next-line */}
        <Route exact path={Routing.generate('article_show')} component={Article} />
        {/* eslint-disable-next-line */}
        <Route exact path={Routing.generate('account_show')} component={() => <div>Account show</div>} />
        {/* eslint-disable-next-line */}
        <Route exact path={Routing.generate('my_profile_show')} component={() => <div>My Profile show</div>} />
        {/* eslint-disable-next-line */}
        <Route exact path={Routing.generate('profile_show')} component={() => <div>Profile show</div>} />
        {/* eslint-disable-next-line */}
        <Route exact path={Routing.generate('my_games')} component={() => <div>My games</div>} />
      </Switch>
    </div>
  </Router>
);


/*
 * Export default
 */
export default App;
