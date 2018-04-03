import React, { Component } from 'react';
import { assign } from 'lodash';
import * as actions from './store/reducers/redis';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';

import Home from './views/Home';
import Login from './views/Login';
import Protected from './views/Protected';
import NotFound from './views/NotFound';
import Navigation from './components/Navigation';
import Languages from './components/Languages';
import PrivateRoute from './PrivateRoute';

class App extends Component {
  componentWillMount() {
    this.props.fetchRedis();
  }
  render() {
    const { t } = this.props;
    return (
      <div className="container">
        <Languages langs={['pm', 'en', 'nl', 'sp']} />
        <hr />
        <Navigation />
        <hr />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
          <PrivateRoute component={NotFound} />
        </Switch>
      </div>
    );
  }
}
const AppConnect = connect(state => state, actions)(App);
const AppTranslate = translate('translations')(AppConnect);
const AppWithRouter = withRouter(AppTranslate);
export default AppWithRouter;
