import React, { Component } from 'react';
import { assign } from 'lodash';
import * as actions from './store/reducers/redis';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';

import Home from './views/Home';
import Navigation from './components/Navigation';
import Languages from './components/Languages';
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
          <Route
            render={props => (
              <h3>
                {t('URL Path')} {props.location.pathname}: {t('page not found')}
              </h3>
            )}
          />
        </Switch>
      </div>
    );
  }
}
const AppConnect = connect(state => state, actions)(App);
const AppTranslate = translate('translations')(AppConnect);
const AppWithRouter = withRouter(AppTranslate);
export default AppWithRouter;
