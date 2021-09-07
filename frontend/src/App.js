import React from 'react';
import { Admin, Resource, Layout, AppBar } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '@semapps/archipelago-layout';
import { createBrowserHistory as createHistory } from 'history';

import i18nProvider from './config/i18nProvider';
import dataProvider from './config/dataProvider';
import * as resources from './resources';

import SettingsIcon from '@material-ui/icons/Settings';

const MyAppBar = props => <AppBar {...props} userMenu={false} />;

const MyLayout = props => <Layout {...props} appBar={MyAppBar} />;

const App = () => {

  return (
    <Admin
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      theme={theme}
      layout={MyLayout}

    >
      {Object.entries(resources).map(([key, resource]) => (
        <Resource key={key} name={key} {...resource.config} />
      ))}
    </Admin>
  )
};

export default App;
