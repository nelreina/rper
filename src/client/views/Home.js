import React from 'react';
import { connect } from 'react-redux';
import Highlight from 'react-highlight';
import { translate } from 'react-i18next';

const Home = ({ redis, t, auth }) => {
  return (
    <div>
      <h1>{t('welcome')} RPER</h1>
      <p className="text-muted">ReactJS/ ParcalJS/ ExpressJS / Redis</p>
      <h3 className="redis-text">{t('message')}:</h3>
      <p>
        <small className="text-muted">{t('delay')}</small>
      </p>
      <Highlight className="java">{JSON.stringify(redis, null, 2)}</Highlight>

      {auth.isAuthenticated ? (
        <p className="log">
          {t('Logged in as')} {auth.user.username}
        </p>
      ) : (
        t('Please login to see protected content')
      )}
    </div>
  );
};

const HomeConnect = connect(state => state)(Home);
const HomeTranslate = translate('translations')(HomeConnect);
export default HomeTranslate;
