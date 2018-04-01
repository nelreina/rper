import React, { Component } from 'react';
import { assign } from 'lodash';
import * as actions from './store/reducers/redis';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, NavLink } from 'react-router-dom';
import { translate, Trans } from 'react-i18next';

import Home from './views/Home';

class App extends Component {
  componentWillMount() {
    this.props.fetchRedis();
  }
  changeLang = lng => {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  };

  render() {
    return (
      <div className="container">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/invalid">
              Invalid Route
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className="btn-group">
          <button
            onClick={() => {
              this.changeLang('en');
            }}
            className="btn btn-dark"
          >
            EN
          </button>
          <button
            onClick={() => {
              this.changeLang('sp');
            }}
            className="btn btn-danger"
          >
            SP
          </button>
        </div>
        <hr />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            render={props => <h3>Path {props.location.pathname} not found</h3>}
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
