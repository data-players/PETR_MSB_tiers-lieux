import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Notification } from 'react-admin';

import { Box, Grid, ThemeProvider } from '@material-ui/core';

import AppBar from './AppBar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import SideMenu from './SideMenu';
import TreeMenu from './DefaultLayout/TreeMenu/TreeMenu';

const Layout = ({ logout, theme, children, title, menu }) => {

  const token = localStorage.getItem('token');
  const payload = token && jwtDecode(token);
  const isConnected = payload && payload.webId !== '';

  const menuItems = [
    { link: '/About', name: 'Qui sommes-nous ?', admin: false },
    { link: '/Map', name: 'Carte des tiers lieux', admin: false },
    { link: '/Search', name: 'Rechercher un service', admin: false },
    { link: '/Organization', name: 'Admin', admin: true },
  ];

  const state = useSelector(state => state);
  // console.log('customState', state.customState);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>

      {/* <ScrollToTop /> */}
      {/* <SideMenu menuItems={menuItems} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

      <AppBar title={title} logout={logout} menuItems={menuItems} setSidebarOpen={setSidebarOpen} isConnected={isConnected} />
      {
        isConnected && state.customState.isAdminContext
          ?
            <Grid container>
              <Grid item xs={3}>
                <TreeMenu />
              </Grid>
              <Grid item xs={9}>
                <Box>{children}</Box>
              </Grid>
            </Grid>
          :
            <Grid container>
              <Grid item xs={12}>
                <Box>{children}</Box>
              </Grid>
            </Grid>
      }
      <Footer title={title} />
      {/* Required for react-admin optimistic update */}
      <Notification />
    </ThemeProvider>
  );
};

export default Layout;
