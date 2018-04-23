/*
 * Npm import
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';



/*
 * Local import
 */
import HomeVisiter from 'frontend/src/components/HomeVisiter';
/*
 * Code
 */

const HomeMember = () => (
  <div id="homeMember">
    Hello Home Member
  </div>
);

const App = () => (
  <Router>
    <div id="app">
      <Switch>
        <Route exact path="/app_dev.php" component={HomeVisiter} />
        {/* <Route exact path="/app_dev.php/home" render={() => <HomeMember data="" />} /> */}
        {/* Nous pouvons ajouter autant de pages que souhaité  */}
      </Switch>
    </div>
  </Router>
);



/*
 * Export default
 */
export default App;
