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
import Article from 'frontend/src/components/Article';
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
        <Route exact path={Routing.generate('announcements_list')} component={() => (<div>Announcements</div>)} />
        {/* eslint-disable-next-line */}
        <Route exact path={Routing.generate('article_show')} component={Article} />
      </Switch>
    </div>
  </Router>
);


/*
 * Export default
 */
export default App;
