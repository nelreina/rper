import React from 'react';
import { translate } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Navigation = ({ t }) => {
  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            {t('Home')}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/protected">
            {t('Protected')}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/invalid">
            {t('Invalid Route')}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default translate()(Navigation);
