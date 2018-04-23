import React, { Component } from 'react';
import { assign } from 'lodash';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';
import { PrivateRoute, Login } from 'nr-react-private-route';

import * as redisActions from './store/reducers/redis';
import { authActions } from 'nelreina-web-utils';

import Home from './views/Home';
import Protected from './views/Protected';
import NotFound from './views/NotFound';
import Navigation from './components/Navigation';
import Languages from './components/Languages';

class App extends Component {
  componentWillMount() {
    this.props.fetchRedis();
  }
  render() {
    const { t, auth, login } = this.props;
    return (
      <div className="container">
        <Languages langs={['pm', 'en', 'nl', 'sp']} />
        <Navigation />

        <Switch>
          <Route
            path="/login"
            exact
            render={props => (
              <Login auth={auth} {...props}>
                <button className="btn btn-primary" onClick={login}>
                  {t('LOGIN')}
                </button>
              </Login>
            )}
          />
          <Route path="/" exact component={Home} />
          <PrivateRoute auth={auth} path="/protected" component={Protected} />
          <PrivateRoute auth={auth} component={NotFound} />
        </Switch>
      </div>
    );
  }
}
const actions = assign({}, redisActions, authActions);
const AppConnect = connect(state => state, actions)(App);
const AppTranslate = translate('translations')(AppConnect);
const AppWithRouter = withRouter(AppTranslate);
export default AppWithRouter;
