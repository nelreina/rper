import React from 'react';
import { translate } from 'react-i18next';

const Protected = ({ t }) => {
  return <div>{t('Protected')}</div>;
};

export default translate()(Protected);
