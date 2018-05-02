// console.log(userSession);
// var client = new XMLHttpRequest();
// client.open('GET', document.location, false);
// client.send();
// var headers = client.getResponseHeader('id');
// console.log(headers);

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
import MyGames from 'frontend/src/containers/MyGames/MyGamesContainer';
import Announce from 'frontend/src/containers/Announce';
/*
 * Code
 */

// const newUrl = [];
// if (window.location.href.split('http://localhost:8000/app_dev.php/article')) {
//   const url = window.location.pathname.split('/');
//   newUrl.push(url[3], url[4]);
// }
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
        <Route exact path={Routing.generate('account_show')} component={() => <div>Account show</div>} />
        {/* eslint-disable-next-line */}
        <Route exact path={Routing.generate('my_profile_show')} component={() => <div>My Profile show</div>} />
        {/* eslint-disable-next-line */}
        <Route exact path={Routing.generate('profile_show')} component={() => <div>Profile show</div>} />
        {/* eslint-disable-next-line */}
        <Route exact path={Routing.generate('my_games')} component={MyGames} />
        {/* eslint-disable-next-line */}
        <Route exact path="/app_dev.php/article/:id/:slug" component={Article} />
        {/* eslint-disable-next-line */}
        <Route exact path="/app_dev.php/announcement/:id/:slug" component={Announce} />
        {/* <Route exact path={Routing.generate('article_show',
        { id: newUrl[0], slug: newUrl[1] })} component={Article} /> */}
        {/* eslint-disable-next-line */}
      </Switch>
    </div>
  </Router>
);


/*
 * Export default
 */
export default App;
