import React from 'react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { authActions as actions } from 'nelreina-web-utils';

const Protected = ({ t, logout }) => {
  return (
    <div>
      <h3>{t('Protected')}</h3>
      <button onClick={logout} className="btn btn-danger">
        Log Out
      </button>
    </div>
  );
};

export default connect(null, actions)(translate()(Protected));
