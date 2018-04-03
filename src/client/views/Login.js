import React, { Component } from 'react';
import { translate } from 'react-i18next';

class Login extends Component {
  render() {
    const { t } = this.props;
    return <div>{t('LOGIN')}</div>;
  }
}
export default translate()(Login);
