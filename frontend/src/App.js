import React from 'react';
import { Admin, Resource } from 'react-admin';
import { createBrowserHistory } from 'history';
import { LoginPage, LogoutButton } from '@semapps/auth-provider';

import authProvider from './config/authProvider';
import i18nProvider from './config/i18nProvider';
import dataProvider from './config/dataProvider';
import * as resources from './resources';

import HomePage from './pages/HomePage/HomePage';
import Layout from './layout/Layout';
import theme from './config/theme';
import customRoutes from './customRoutes';

import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic'

const history = createBrowserHistory();

const App = () => {
  return (
    <BreadcrumbsProvider>
      <Admin
        disableTelemetry
        history={history}
        title="Mon titre"
        authProvider={authProvider}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        layout={Layout}
        theme={theme}
        loginPage={LoginPage}
        logoutButton={LogoutButton}
        dashboard={HomePage}
        customRoutes={customRoutes}
      >
        {Object.entries(resources).map(([key, resource]) => (
          <Resource key={key} name={key} {...resource.config} />
        ))}
      </Admin>
    </BreadcrumbsProvider>
  )
};

export default App;
