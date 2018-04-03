import React from 'react';
import { translate } from 'react-i18next';

const NotFound = props => {
  const { t } = props;
  return (
    <div>
      {t('URL Path')} {props.location.pathname}: {t('page not found')}
    </div>
  );
};

export default translate()(NotFound);
