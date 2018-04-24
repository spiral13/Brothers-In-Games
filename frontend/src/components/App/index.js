/*
 * Npm import
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';



/*
 * Local import
 */
import HomeVisiter from 'frontend/src/components/HomeVisiter';
import HomeMember from 'frontend/src/components/HomeMember';
/*
 * Code
 */

const App = () => (
  <Router>
    <div id="app">
      {/* Nous pouvons ajouter autant de pages que souhaité  */}
      <Switch>
        <Route exact path={Routing.generate('home_visitor')} component={HomeVisiter} />
        <Route exact path={Routing.generate('home_user')} component={HomeMember} />
      </Switch>
    </div>
  </Router>
);



/*
 * Export default
 */
export default App;
