import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Dashboard from './view/Dashboard';
import NoMatch from './view/NoMatch';

class App extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <Link to={`${window.webpackPublicPath}/dashboard`}>Dashboard</Link>
        </nav>
        <div>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
