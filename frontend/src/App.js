import React from 'react';
import { Admin, Resource } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { LoginPage, LogoutButton, UserMenu } from '@semapps/auth-provider';
import { Layout, AppBar, theme } from '@semapps/archipelago-layout';
import { createBrowserHistory as createHistory } from 'history';

import authProvider from './config/authProvider';
import i18nProvider from './config/i18nProvider';
import dataProvider from './config/dataProvider';
import * as resources from './resources';

import SettingsIcon from '@material-ui/icons/Settings';

const history = createHistory();
const AppBarWithUserMenu = props => <AppBar userMenu={<UserMenu />} {...props} />;
const LayoutWithUserMenu = props => <Layout {...props} appBar={AppBarWithUserMenu} />;

const App = () => {
    
  return (
    <Admin
      history={history}
      authProvider={authProvider}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      layout={LayoutWithUserMenu}
      theme={theme}
      loginPage={LoginPage}
      logoutButton={LogoutButton}
    >
      {Object.entries(resources).map(([key, resource]) => (
        <Resource key={key} name={key} {...resource.config} />
      ))}
    </Admin>
  )
};

export default App;
